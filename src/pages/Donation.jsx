import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Donation() {
  return (
    <div className="py-24 min-h-[85vh]  flex items-center justify-center sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#725142] sm:text-6xl">
            صفحة التبرعات
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            دعمك يساهم في تطوير وتحسين تطبيق "مستقيم". بتبرعاتك، نستطيع إضافة
            المزيد من الميزات وتحسين التجربة الكلية للمستخدمين. كل تبرع يساعدنا
            في تحقيق رؤيتنا لتقديم أفضل تطبيق للاستماع إلى القرآن الكريم. شكراً
            لدعمك وثقتك بنا! .
            <p className="font-bold">
              يمكنك التبرع لفلسطين عبر تطبيق "مستقيم". بالاضافة الي اننا نخصص جزءاً من تبرعات التطبيق
              لدعم اخواننا في فلسطين
            </p>
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-md bg-[#725142] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              تبرع الان
            </a>
            <a
              href="#"
              className="rounded-md bg-[#ee8664] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              تبرع لفلسطين
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
