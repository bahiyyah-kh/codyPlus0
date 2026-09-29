const features = [
  {
    titleAr: 'تعلم تفاعلي',
    descAr: 'ألعاب وأحاجي ممتعة تجعل تعلم C++ مغامرة لا تُنسى',
    icon: (
      <>
        <path d="M6 5h12a3 3 0 0 1 3 2.6l1 9a2 2 0 0 1-3.3 1.7L15 15H9l-3.7 3.3A2 2 0 0 1 2 16.6l1-9A3 3 0 0 1 6 5Z" />
        <path d="M6 10h4M8 8v4M16 9h.01M18 12h.01" />
      </>
    ),
  },
  {
    titleAr: 'مساعد ذكي',
    descAr: 'احصل على تلميحات ذكية تساعدك على حل التحديات دون أن تكشف الإجابة',
    icon: (
      <>
        <rect x="4" y="7" width="16" height="14" rx="3" />
        <path d="M12 7V3M10 3h4M2 12v4M22 12v4M8 12v2M16 12v2M9 18h6" />
      </>
    ),
  },
  {
    titleAr: 'نظام مكافآت',
    descAr: 'اكسب نقاط الخبرة والشارات وتسلق قائمة المتصدرين',
    icon: (
      <>
        <path d="M7 2h10v8a5 5 0 0 1-10 0V2ZM7 4H4a2 2 0 0 0-2 2v1a4 4 0 0 0 5 4M17 4h3a2 2 0 0 1 2 2v1a4 4 0 0 1-5 4M12 15v4M8 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M4 22h16" />
      </>
    ),
  },
  {
    titleAr: 'تتبع التقدم',
    descAr: 'راقب رحلتك التعليمية وشاهد تقدمك في كل مرحلة',
    icon: (
      <>
        <path d="M3 3v18h18M8 13v4M13 5v12M18 9v8" />
      </>
    ),
  },
  {
    titleAr: 'محرر كود حقيقي',
    descAr: 'اكتب وجرّب كود C++ مباشرة في المتصفح',
    icon: (
      <>
        <path d="m6 8-4 4 4 4M18 8l4 4-4 4M15 3 9 21" />
      </>
    ),
  },
  {
    titleAr: 'شهادة إتمام',
    descAr: 'احصل على شهادة إتمام معتمدة عند اجتياز جميع المراحل',
    icon: (
      <>
        <path d="M6 3h11a2 2 0 0 1 2 2v13M6 3a2 2 0 0 0-2 2v3H2V5a2 2 0 0 1 4 0v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2" />
      </>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <section
      lang="ar"
      dir="rtl"
      aria-labelledby="features-heading"
      className="bg-[#FAFBFC] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[30px]">
        <div className="mb-10 text-center sm:mb-14 lg:mb-[60px]">
          <h2
            id="features-heading"
            className="mb-3 text-3xl leading-tight font-black text-[#03045E] sm:text-4xl"
          >
            لماذا كودي+؟
          </h2>
          <p className="text-base leading-relaxed text-[#6B7280] sm:text-lg">
            تجربة تعليمية فريدة صُممت خصيصاً للطلاب العرب
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {features.map((feature) => (
            <article
              key={feature.titleAr}
              className="min-w-0 rounded-[22px] bg-white p-6 text-right shadow-[0_4px_20px_rgba(3,4,94,0.07)] transition-shadow hover:shadow-lg sm:p-[30px] lg:min-h-[237px]"
            >
              <div className="mb-6 flex size-[60px] items-center justify-center rounded-full bg-[#CAF0F8] text-[#03045E]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-xl leading-7 font-bold text-[#03045E]">
                {feature.titleAr}
              </h3>
              <p className="text-base leading-7 wrap-break-word text-[#6B7280]">
                {feature.descAr.split(/(C\+\+)/).map((part, index) =>
                  part === 'C++' ? (
                    <bdi key={index} dir="ltr" className="whitespace-nowrap">
                      C++
                    </bdi>
                  ) : part,
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
