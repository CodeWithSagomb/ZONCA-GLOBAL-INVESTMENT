import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { trackEvent } from '../components/common/GoogleAnalytics';
import { contactSchema, ContactFormInput } from '../utils/validation';
import { sendContactEmail } from '../services/emailService';
import { COMPANY_INFO } from '../constants/config';

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(data);
      setSubmitStatus('success');
      reset();

      // Track successful form submission in Google Analytics
      trackEvent('Contact', 'Form Submit Success', data.projectType);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);

      // Track failed form submission
      trackEvent('Contact', 'Form Submit Error', 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Request a Quote"
        description="Get in touch with Zonca Global Investment for custom aluminium solutions. Request a quote for your project. Fast response within 24 hours."
        url="https://zoncaglobal.com/contact"
      />
      <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 uppercase">Request For Quote</h2>
          <p className="text-gray-500 mt-2">Please provide project details. Our estimation team will respond within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 bg-slate-900 text-white p-10 flex flex-col justify-between h-full">
             <div>
               <h3 className="text-xl font-bold mb-8 text-zonca-red">Contact Information</h3>
               <div className="space-y-8">
                 <div className="flex">
                   <MapPin className="text-gray-400 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-sm uppercase text-gray-400 mb-1">Headquarters / Factory</p>
                     <p className="leading-relaxed">{COMPANY_INFO.address}</p>
                   </div>
                 </div>
                 <div className="flex">
                   <Phone className="text-gray-400 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-sm uppercase text-gray-400 mb-1">Phone</p>
                     <p>{COMPANY_INFO.phone}</p>
                   </div>
                 </div>
                 <div className="flex">
                   <Mail className="text-gray-400 mr-4 shrink-0" />
                   <div>
                     <p className="font-bold text-sm uppercase text-gray-400 mb-1">Email</p>
                     <p>{COMPANY_INFO.email}</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-12">
               <p className="text-xs text-gray-500">Operating Hours: {COMPANY_INFO.hours}</p>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
             <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name *</label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name *</label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                {/* Company */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Company Name</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red outline-none transition-colors"
                    placeholder="Construction Co. Ltd"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                    placeholder="+234 XXX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Project Type */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Interest *</label>
                  <select
                    {...register('projectType')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.projectType ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                  >
                    <option value="">Select a project type</option>
                    <option value="Commercial Facade System">Commercial Facade System</option>
                    <option value="Residential Windows & Doors">Residential Windows & Doors</option>
                    <option value="Office Partitioning">Office Partitioning</option>
                    <option value="Wholesale Aluminum Profiles">Wholesale Aluminum Profiles</option>
                    <option value="Other / Consultation">Other / Consultation</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Details / Specs *</label>
                  <textarea
                    rows={5}
                    {...register('message')}
                    className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
                    }`}
                    placeholder="Please describe dimensions, quantities, and specific requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold uppercase tracking-widest py-4 transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-zonca-red hover:bg-red-800 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="md:col-span-2 bg-green-50 border border-green-200 text-green-800 p-4 rounded">
                    ✅ Message sent successfully! We will respond within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-800 p-4 rounded">
                    ❌ Error sending message. Please try again or contact us directly.
                  </div>
                )}
             </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
