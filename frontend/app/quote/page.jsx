"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Components
import QuoteFormHeader from "@/components/Quote/QuoteFormHeader";
import FormStep1 from "@/components/Quote/FormStep1";
import FormStep2 from "@/components/Quote/FormStep2";
import FormStep3 from "@/components/Quote/FormStep3";
import SuccessModal from "@/components/Shared/SuccessModal";

// Constants & Config
import usStates from "@/constants/usStates.json";
import serviceCategories from "@/constants/serviceCategories.json";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Legal Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  // Step 2
  numberOfTrucks: z.string().min(1, "Number of trucks is required"),
  hasLLC: z.boolean(),
  hasUSDOT: z.boolean(),
  // Conditional fields
  businessName: z.string().optional(),
  llcState: z.string().optional(),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehicleYear: z.string().optional(),
  vinNumber: z.string().optional(),
  usdotNumber: z.string().optional(),
  dob: z.string().optional(),
  ssn: z.string().optional(),
  ein: z.string().optional(),
  // Step 3
  services: z.array(z.string()).min(1, "Select at least one service"),
  referral: z.string().optional(),
  message: z.string().optional(),
}).refine((data) => {
  if (data.hasLLC) {
    return !!data.businessName && !!data.llcState;
  }
  return true;
}, {
  message: "Business Name and LLC State are required if you have an LLC",
  path: ["businessName"]
}).refine((data) => {
  if (data.hasUSDOT) {
    return !!data.vehicleMake && !!data.vehicleModel && !!data.vehicleYear && 
           !!data.vinNumber && !!data.usdotNumber && !!data.dob && !!data.ssn && !!data.ein;
  }
  return true;
}, {
  message: "All USDOT fields are required if you have a USDOT number",
  path: ["usdotNumber"]
});

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      hasLLC: false,
      hasUSDOT: false,
      services: [],
      numberOfTrucks: "1",
      referral: "",
      message: "",
    },
  });

  // Watch fields for validation
  const watchedFields = watch();

  const isStep1Valid = watchedFields.fullName && watchedFields.email && watchedFields.phone;
  const isStep2Valid = () => {
    if (!watchedFields.numberOfTrucks) return false;
    if (watchedFields.hasLLC && (!watchedFields.businessName || !watchedFields.llcState)) return false;
    if (watchedFields.hasUSDOT) {
      return (
        !!watchedFields.vehicleMake && !!watchedFields.vehicleModel && !!watchedFields.vehicleYear &&
        !!watchedFields.vinNumber && !!watchedFields.usdotNumber && !!watchedFields.dob &&
        !!watchedFields.ssn && !!watchedFields.ein
      );
    }
    return true;
  };

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ["fullName", "email", "phone"];
    else if (currentStep === 2) {
      fieldsToValidate = ["numberOfTrucks"];
      if (watchedFields.hasLLC) fieldsToValidate.push("businessName", "llcState");
      if (watchedFields.hasUSDOT) fieldsToValidate.push("vehicleMake", "vehicleModel", "vehicleYear", "vinNumber", "usdotNumber", "dob", "ssn", "ein");
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data) => {
    setSubmitStatus("sending");
    const now = new Date();
    const timestamp = now.toLocaleString();
    const submissionDate = now.toISOString().split('T')[0];
    
    const emailParams = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      services_selected: data.services.join(", "),
      referred_by: data.referral || "Not provided",
      timestamp,
    };

    const sheetsData = { 
      ...data, 
      hasLLC: data.hasLLC ? "Yes" : "No",
      hasUSDOT: data.hasUSDOT ? "Yes" : "No",
      servicesSelected: data.services.join(", "),
      timestamp,
      submissionDate
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_QUOTE;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE;
      const sheetsWebhook = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

      const promises = [emailjs.send(serviceId, templateId, emailParams)];
      if (sheetsWebhook) {
        promises.push(fetch(sheetsWebhook, { 
          method: "POST", 
          mode: "no-cors", 
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(sheetsData) 
        }));
      }

      await Promise.all(promises);
      setSubmitStatus("success");
      setStatusMessage("Thank you! Your quote request has been submitted.");
      setShowModal(true);
      reset();
      setCurrentStep(1);
      
      // Reset status and message after a few seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Error sending request. Please try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-accent">
      <QuoteFormHeader />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-primary">
                Step {currentStep} of 3 - {currentStep === 1 ? "Personal Info" : currentStep === 2 ? "Business & Setup" : "Services & Finalize"}
              </span>
              <span className="text-sm font-bold text-primary">
                {Math.round((currentStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-secondary h-2.5 rounded-full"
                animate={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence>
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === "success" || statusMessage.includes("Thank you") 
                    ? "bg-green-100 text-green-800 border-green-200" 
                    : "bg-red-100 text-red-800 border-red-200"
                }`}
              >
                {submitStatus === "success" || statusMessage.includes("Thank you") ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{statusMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence custom={direction} mode="wait">
              {currentStep === 1 && (
                <FormStep1
                  register={register}
                  errors={errors}
                  isStepValid={isStep1Valid}
                  onNext={nextStep}
                  variants={variants}
                  direction={direction}
                />
              )}
              {currentStep === 2 && (
                <FormStep2
                  register={register}
                  errors={errors}
                  isStepValid={isStep2Valid()}
                  onNext={nextStep}
                  onPrev={prevStep}
                  variants={variants}
                  direction={direction}
                  watch={watch}
                  setValue={setValue}
                />
              )}
              {currentStep === 3 && (
                <FormStep3
                  register={register}
                  errors={errors}
                  submitStatus={submitStatus}
                  onPrev={prevStep}
                  variants={variants}
                  direction={direction}
                  watch={watch}
                  setValue={setValue}
                />
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Quote Request Submitted!"
        message="Thank you for your interest! Our team will contact you within 12 hours to discuss your quote."
      />
    </div>
  );
}
