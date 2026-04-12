import { notFound } from 'next/navigation';
import { servicesData } from '../../../constants/servicesData';
import ServicePageClient from './ServicePageClient';

function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found - HaulSafe Insurance',
    };
  }

  return {
    title: `${service.title} - HaulSafe Insurance`,
    description: service.description.substring(0, 160),
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
