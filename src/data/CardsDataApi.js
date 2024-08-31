import appImage from "../assets/app.png";
import appImage2 from "../assets/app2.png";
import appImage3 from "../assets/app3.png";
import appImage4 from "../assets/app4.png";
import newFeatureImage from "../assets/newFeature.jpg";

const featuresData = [
  {
    id: 5,
    title: "أصوات لشيوخ متعددين",
    description: "يتوفر لدينا تلاوات من شيوخ متعددين لتلبية جميع تفضيلاتك.",
    image: appImage2,
    NewFeature: false,
  },
  {
    id: 6,
    title: "تشغيل في الخلفية",
    description:
      "يمكنك الاستماع إلى التلاوات أثناء استخدام تطبيقات أخرى أو عندما يكون التطبيق في الخلفية.",
    image: appImage,
    NewFeature: false,
  },
  {
    id: 9,
    title: "القرآن الكريم كاملاً",
    description: "يحتوي التطبيق على المصحف الكريم كاملاً مع التلاوات.",
    image: appImage,
    NewFeature: false,
  },
  {
    id: 10,
    title: "وضع القراءة",
    description:
      "يتضمن التطبيق وضع القراءة الذي يتيح لك قراءة القرآن بوضوح وسهولة. ",
    image: appImage4,
    NewFeature: false,
  },
  {
    id: 11,
    title: "تخصيص واجهة التطبيق",
    description:
      "يتيح لك التطبيق تخصيص الواجهة الأمامية بما يتناسب مع تفضيلاتك الشخصية، مما يوفر تجربة استماع مميزة.",
    image: newFeatureImage,
    NewFeature: true,
  },
  {
    id: 12,
    title: "تنزيل القرآن الكريم",
    description:
      "يوفر التطبيق الآن ميزة تنزيل المصحف الكريم بالكامل على جهازك، مما يتيح لك الاستماع إلى التلاوات في أي وقت دون الحاجة إلى الاتصال بالإنترنت.",
    image: appImage,
    NewFeature: true,
  },
];

export default featuresData;
