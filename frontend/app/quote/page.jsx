"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Building2, CheckCircle, ChevronRight, ChevronLeft, X, Check, AlertCircle, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SuccessModal from "@/components/Shared/SuccessModal";
import { servicesData } from "@/constants/servicesData";

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

const SERVICE_CATEGORIES = [
  {
    title: "Business Setup",
    services: [
      "LLC Formation", "EIN Tax ID", "BOI Report", "Annual Report Filing",
      "LLC Amendment", "Operating Agreement", "DBA Filing"
    ]
  },
  {
    title: "Authority",
    services: [
      "USDOT Number", "MC Number", "BOC-3 Filing", "UCR Registration", "MC Authority Letter"
    ]
  },
  {
    title: "Insurance",
    services: [
      "Vehicle Insurance", "Truck General Liability", "Professional Liability", "Commercial Auto"
    ]
  }
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, sending, success, error
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS with Public Key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
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

  const selectedServices = watch("services");
  const hasLLC = watch("hasLLC");
  const hasUSDOT = watch("hasUSDOT");

  // Watch fields for validation to disable/enable Next buttons
  const fullName = watch("fullName");
  const email = watch("email");
  const phone = watch("phone");
  const numberOfTrucks = watch("numberOfTrucks");
  const businessName = watch("businessName");
  const llcState = watch("llcState");
  const vehicleMake = watch("vehicleMake");
  const vehicleModel = watch("vehicleModel");
  const vehicleYear = watch("vehicleYear");
  const vinNumber = watch("vinNumber");
  const usdotNumber = watch("usdotNumber");
  const dob = watch("dob");
  const ssn = watch("ssn");
  const ein = watch("ein");

  const isStep1Valid = fullName && email && phone;
  const isStep2Valid = () => {
    if (!numberOfTrucks) return false;
    if (hasLLC) {
      if (!businessName || !llcState) return false;
    }
    if (hasUSDOT) {
      return (
        !!vehicleMake &&
        !!vehicleModel &&
        !!vehicleYear &&
        !!vinNumber &&
        !!usdotNumber &&
        !!dob &&
        !!ssn &&
        !!ein
      );
    }
    return true;
  };

  const ServicesModal = () => {
    const [tempSelected, setTempSelected] = useState(selectedServices || []);

    const toggleTemp = (service) => {
      if (tempSelected.includes(service)) {
        setTempSelected(tempSelected.filter(s => s !== service));
      } else {
        setTempSelected([...tempSelected, service]);
      }
    };

    const handleApply = () => {
      setValue("services", tempSelected, { shouldValidate: true });
      setIsServicesModalOpen(false);
    };

    return (
      <AnimatePresence>
        {isServicesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsServicesModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[600px] h-[85vh] md:h-[600px] bg-[#FDFCF0] border-2 border-[#D2BD69] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#D2BD69]/20 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#043927]">Select Services You Need</h3>
                    <p className="text-sm text-gray-500">Choose all services you need help with</p>
                  </div>
                  <button 
                    onClick={() => setIsServicesModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-[#043927]" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <h4 className="text-md font-bold text-[#043927] uppercase tracking-wider border-b-2 border-[#D2BD69]/30 pb-2 inline-block">
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.services.map((service) => {
                        const isChecked = tempSelected.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleTemp(service)}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                              isChecked
                                ? "bg-[#D2BD69] border-[#D2BD69] text-[#043927] shadow-md"
                                : "bg-white border-gray-200 text-gray-600 hover:border-[#D2BD69]/50"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              isChecked ? "bg-[#043927] border-[#043927]" : "border-gray-300 bg-white"
                            }`}>
                              {isChecked && <Check className="w-3 h-3 text-[#D2BD69]" strokeWidth={4} />}
                            </div>
                            <span className="text-sm font-bold">{service}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 bg-white border-t border-[#D2BD69]/20">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-[#043927] font-bold">
                    {tempSelected.length} {tempSelected.length === 1 ? "Service" : "Services"} Selected
                  </div>
                  <button
                    onClick={handleApply}
                    disabled={tempSelected.length === 0}
                    className="w-full sm:flex-1 bg-[#D2BD69] text-[#043927] font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    APPLY SERVICES
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (currentStep === 1) {
      fieldsToValidate = ["fullName", "email", "phone"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["numberOfTrucks"];
      if (hasLLC) {
        fieldsToValidate.push("businessName", "llcState");
      }
      if (hasUSDOT) {
        fieldsToValidate.push(
          "vehicleMake",
          "vehicleModel",
          "vehicleYear",
          "vinNumber",
          "usdotNumber",
          "dob",
          "ssn",
          "ein"
        );
      }
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
    setStatusMessage("");

    const now = new Date();
    const timestamp = now.toLocaleString();
    const submissionDate = now.toISOString().split('T')[0];

    // 1. Prepare EmailJS summary data
    const emailParams = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      services_selected: data.services.join(", "),
      referred_by: data.referral || "Not provided",
      timestamp: timestamp,
    };

    // 2. Prepare Google Sheets detailed data
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

      console.log("EmailJS Params:", serviceId);
      console.log("Google Sheets Data:", sheetsData);
      console.log("templates:", templateId);



      if (!serviceId ) {
        throw new Error("EmailJS service configuration missing");
      }

      if (!templateId ) {
        throw new Error("EmailJS template configuration missing");
      }

      // Parallel execution for both EmailJS and Google Sheets
      const emailPromise = emailjs.send(serviceId, templateId, emailParams);
      
      let sheetsPromise = Promise.resolve();
      if (sheetsWebhook) {
        console.log("Sending data to Google Sheets webhook...", sheetsWebhook);
        sheetsPromise = fetch(sheetsWebhook, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(sheetsData),
        });
      }



      const [emailRes, sheetsRes] = await Promise.all([emailPromise, sheetsPromise]);
      console.log("EmailJS Response:", emailRes);
      console.log("Google Sheets Response:", sheetsRes);

      setSubmitStatus("success");
      setStatusMessage("Thank you! Your quote request has been submitted.");
      setShowModal(true);
      reset();
      setCurrentStep(1);

      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
      setTimeout(() => setStatusMessage(""), 5000);

    } catch (error) {
      console.error("Quote Submission Error:", error);
      setSubmitStatus("error");
      setStatusMessage("Error sending request. Please try again.");
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const ToggleField = ({ name, label }) => {
    const value = watch(name);
    return (
      <div className="flex-1">
        <label className="block text-sm font-bold text-[#043927] mb-3">
          {label}
        </label>
        <div className="flex gap-3">
          <motion.button
            type="button"
            className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
              value === true
                ? "bg-secondary border-secondary text-primary"
                : "bg-white border-gray-200 text-gray-500 hover:border-secondary/50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setValue(name, true)}
          >
            YES
          </motion.button>
          <motion.button
            type="button"
            className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
              value === false
                ? "bg-gray-100 border-gray-200 text-gray-700"
                : "bg-white border-gray-200 text-gray-500 hover:border-secondary/50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setValue(name, false)}
          >
            NO
          </motion.button>
        </div>
      </div>
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <motion.section
        className="bg-primary py-16 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-gray-200 text-lg">
            Fill out the form below. We will contact you within 12 hours. No obligation.
          </p>
        </div>
      </motion.section>

      {/* Form Section */}
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
                {currentStep === 1 ? "33%" : currentStep === 2 ? "67%" : "100%"} Complete
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-secondary h-2.5 rounded-full"
                initial={{ width: "33.33%" }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
            </div>
          </div>

          {/* Status Messages */}
          <AnimatePresence>
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus === "success" ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{statusMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ServicesModal />
            <AnimatePresence custom={direction} mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-secondary" />
                    Personal Information
                  </h2>

                  {/* Full Legal Name */}
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-gray-200 focus:border-secondary"
                      } focus:outline-none transition-all placeholder:text-gray-400`}
                      placeholder="John A. Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs font-medium mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-200 focus:border-secondary"
                        } focus:outline-none transition-all placeholder:text-gray-400`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs font-medium mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.phone
                            ? "border-red-500"
                            : "border-gray-200 focus:border-secondary"
                        } focus:outline-none transition-all placeholder:text-gray-400`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs font-medium mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Next Button */}
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStep1Valid}
                    className="w-full bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={isStep1Valid ? { scale: 1.01 } : {}}
                    whileTap={isStep1Valid ? { scale: 0.99 } : {}}
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Business & Setup */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-secondary" />
                    Business & Setup
                  </h2>

                  {/* Main Questions */}
                  <div className="space-y-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Number of Trucks
                      </label>
                      <input
                        type="number"
                        {...register("numberOfTrucks")}
                        className="w-full md:w-1/3 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all"
                        placeholder="1"
                        min="1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ToggleField name="hasLLC" label="Do you have LLC?" />
                      <ToggleField name="hasUSDOT" label="Do you have USDOT?" />
                    </div>
                  </div>

                  {/* Conditional LLC Field */}
                  <AnimatePresence>
                    {hasLLC && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20 space-y-4">
                          <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Business Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">
                                Business Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                {...register("businessName")}
                                className={`w-full px-4 py-3 rounded-xl border-2 ${errors.businessName ? 'border-red-500' : 'border-gray-200 focus:border-secondary'} focus:outline-none transition-all`}
                                placeholder="Your Business Name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">
                                LLC State <span className="text-red-500">*</span>
                              </label>
                              <select 
                                {...register("llcState")} 
                                className={`w-full px-4 py-3 rounded-xl border-2 ${errors.llcState ? 'border-red-500' : 'border-gray-200 focus:border-secondary'} focus:outline-none transition-all bg-white`}
                              >
                                <option value="">Select State</option>
                                {US_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Conditional USDOT Fields */}
                  <AnimatePresence>
                    {hasUSDOT && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 space-y-6">
                          <h3 className="text-sm font-bold text-primary uppercase tracking-wider">USDOT & Vehicle Details</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">Make</label>
                              <input type="text" {...register("vehicleMake")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="e.g., Freightliner, Volvo" />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">Model</label>
                              <input type="text" {...register("vehicleModel")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="e.g., Cascadia" />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">Year</label>
                              <input type="number" {...register("vehicleYear")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="2020" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">VIN Number</label>
                              <input type="text" {...register("vinNumber")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="Enter VIN" />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">USDOT Number</label>
                              <input type="text" {...register("usdotNumber")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="Enter USDOT Number" />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">Date of Birth</label>
                              <input type="date" {...register("dob")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">SSN</label>
                              <input type="text" {...register("ssn")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="XXX-XX-XXXX" />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-primary mb-2">EIN Number</label>
                              <input type="text" {...register("ein")} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all" placeholder="XX-XXXXXXX" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Back & Next Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStep2Valid()}
                      className="flex-1 bg-secondary text-primary font-bold py-4 px-8 rounded-xl text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={isStep2Valid() ? { scale: 1.01 } : {}}
                      whileTap={isStep2Valid() ? { scale: 0.99 } : {}}
                    >
                      Next Step
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Services & Finalize */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                    Services & Finalize
                  </h2>

                  {/* Services Selection Trigger */}
                  <div>
                    <label className="block text-lg font-bold text-primary mb-1">
                      Services Needed <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-4">
                      Click to select all services you need help with:
                    </p>
                    
                    <button
                      type="button"
                      onClick={() => setIsServicesModalOpen(true)}
                      className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${
                        selectedServices.length > 0
                          ? "bg-white border-secondary shadow-md"
                          : "bg-white border-gray-200 hover:border-secondary/50"
                      }`}
                    >
                      {selectedServices.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedServices.slice(0, 2).map(service => (
                            <span key={service} className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-bold border border-secondary/30">
                              {service}
                            </span>
                          ))}
                          {selectedServices.length > 2 && (
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                              +{selectedServices.length - 2} more
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400 font-bold">Select Services...</span>
                      )}
                    </button>
                    
                    {errors.services && (
                      <p className="text-red-500 text-xs font-bold mt-2">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  {/* Referral & Additional Message */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Who referred you? (Optional)
                      </label>
                      <input
                        type="text"
                        {...register("referral")}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all placeholder:text-gray-400"
                        placeholder="Friend or colleague's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        {...register("message")}
                        rows="1"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="Any additional details..."
                      />
                    </div>
                  </div>

                  {/* Back & Submit Buttons */}
                  <div className="flex flex-col-reverse md:flex-row gap-4 pt-6">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      disabled={submitStatus === "sending"}
                      className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={submitStatus === "sending" || submitStatus === "success"}
                      className={`flex-1 font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2 shadow-xl ${
                        submitStatus === "sending"
                          ? "bg-gray-400 cursor-not-allowed"
                          : submitStatus === "success"
                          ? "bg-green-500 text-white"
                          : submitStatus === "error"
                          ? "bg-red-500 text-white"
                          : "bg-secondary text-primary hover:bg-opacity-90"
                      }`}
                      whileHover={submitStatus === "idle" ? { scale: 1.01 } : {}}
                      whileTap={submitStatus === "idle" ? { scale: 0.99 } : {}}
                    >
                      {submitStatus === "sending" ? (
                        "SUBMITTING..."
                      ) : submitStatus === "success" ? (
                        <>
                          <CheckCircle2 className="w-6 h-6" />
                          SUBMITTED
                        </>
                      ) : submitStatus === "error" ? (
                        "TRY AGAIN"
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          GET MY FREE QUOTE
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Quote Request Submitted!"
        message="Thank you for your interest! Our team will contact you within 12 hours to discuss your quote. No obligation, no pressure."
      />
    </div>
  );
}
