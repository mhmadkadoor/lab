import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Iletisim
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Benimle iletisime gecmek icin asagidaki formu doldurabilirsiniz.
        </p>
        <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
