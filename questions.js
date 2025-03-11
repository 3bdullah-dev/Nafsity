const questions = [
  {
    question: "السؤال 1: كيف تصف حالتك المزاجية طيلة الأسبوعين الماضيين؟",
    options: ["خايب", "متوسط", "باهي"],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question:
      "السؤال 2: حسّيت بتغييرات كبيرة في مزاجك أو طاقتك خلال الفترة الأخيرة؟",
    options: [
      " نعم، بشكل ملحوظ.",
      " لا، الأمور عادية.",
      "أحيانًا، حسب الظروف.",
    ],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 3:  كم مرة تحس بالقلق أو التوتر في النهار؟",
    options: ["ديما.", "أحيانًا", " نادرًا."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question:
      "السؤال 4: تلقى روحك تفكر برشة في الأمور الصغار أو تقلق على المستقبل؟",
    options: ["ديما نفكر.", "مرات، حسب الموقف.", "قليل برشة."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 5: تحس إنو التوتر مأثر على نومك أو قدرتك على التركيز؟",
    options: ["نعم، بشكل واضح.", "مرات، لكن موش ديما.", "لا، الحمد لله."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 6: كيف تصف مستوى طاقتك ونشاطك اليومي؟",
    options: ["منخفض وأحيانًا تعب.", "متوسط، نكافح.", "عالي ونشيط"],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 7: تلقى صعوبة في القيام الصباح وبدء نهارك؟",
    options: ["ديما، صعيب نبدأ.", "مرات، حسب المزاج.", "لا، الأمور عادية."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 8: تحس بالتعب أو الإرهاق بسهولة في الأنشطة اليومية؟",
    options: ["نعم، كل يوم تقريبًا.", "مرات قليلة.", "لا، نادرًا."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 9: تحس بدعم من الأصدقاء والعائلة كيما تحتاجه؟",
    options: ["لا، أحس بالنقص.", "مرات، موش ديما.", "نعم، الحمد لله."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question:
      "السؤال 10:  تلقى صعوبة في التواصل أو البقاء على اتصال مع الآخرين؟",
    options: [
      "ديما نحس بالتعب من التواصل.",
      "مرات قليلة.",
      "لا، الأمور عادية.",
    ],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 11: هل تشعر بالعزلة أو الوحدة بشكل متكرر؟",
    options: ["نعم، كثير برشة.", " أحيانًا لما أكون وحدي.", "لا، الحمد لله."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question:
      "السؤال 12: تلقى صعوبة في السيطرة على الأفكار السلبية أو المشاعر الحزينة؟",
    options: ["نعم، ما نجمش نتخلص منها.", "مرات، حسب الظرف.", " لا، نادرًا."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 13: فقدت الاهتمام بالأنشطة اللي كنت تحبها من قبل؟",
    options: [
      "نعم، ما نحبش نعمل حتى شيء.",
      "مرات، نرجع ونبدى.",
      " لا، ما زالت عندي اهتمامات.",
    ],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 14: تقلق على قدرتك في مواجهة الضغوط اليومية؟",
    options: ["نعم، نخاف ونقلق.", "مرات، لكن نحاول نواجه.", "لا، أنا متوازن."],
    scores: [30, 60, 90],
    selectedIndex: null,
  },
  {
    question: "السؤال 15: تلقى صعوبة في اتخاذ القرارات أو البدء في المهام؟",
    options: [" نعم، ديما متردد.", "مرات، حسب صعوبة القرار.", "لا، عندي وضوح"],
    scores: [30, 60, 90],
    selectedIndex: null,
  },

  {
    question: "السؤال 16: اشرح مشكلتك",
    type: "text", // للتمييز بأنه سؤال نصي
    answer: "", // لتخزين الشرح
  },
];
