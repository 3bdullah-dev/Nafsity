const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const startTestBtn = document.getElementById("startTestBtn");
const testContainer = document.getElementById("testContainer");
const navigation = document.getElementById("navigation");
const alertModal = document.getElementById("alertModal");
const closeModalBtn = document.getElementById("closeModalBtn");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Toggle Test Visibility
startTestBtn.addEventListener("click", () => {
  testContainer.style.display = "block";
  startTestBtn.style.display = "none";
  navigation.style.display = "flex";
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
  alertModal.style.display = "none";
});

// Test Logic

let currentQuestion = 0;
let totalScore = 0;
const totalQuestions = questions.length;
const maxScore = 15 * 90; // 12 * 90 = 1080

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionNumber = document.getElementById("question-number");
const exitBtn = document.getElementById("exit-test");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showQuestion(index) {
  const question = questions[index];
  if (question.type === "text") {
    questionContainer.innerHTML = `
          <h3>${question.question}</h3>
          <div class="options">
              <textarea id="textAnswer" rows="4" placeholder="أدخل شرح مشكلتك هنا..." style="width: 100%; padding: 0.8rem; border: 2px solid var(--primary-color); border-radius: 5px; font-size: clamp(0.9rem, 2.5vw, 1rem); resize: vertical;">${
                question.answer || ""
              }</textarea>
          </div>
      `;
    document.getElementById("textAnswer").addEventListener("input", (e) => {
      questions[index].answer = e.target.value;
    });
    questionNumber.textContent = `16/16`;
    nextBtn.textContent = "إنهاء الاختبار";
  } else {
    questionContainer.innerHTML = `
          <h3>${question.question}</h3>
          <div class="options">
              ${question.options
                .map(
                  (opt, i) => `
                          <input type="radio" name="q${index}" id="q${index}-${i}" ${
                    question.selectedIndex === i ? "checked" : ""
                  }>
                          <label for="q${index}-${i}">${opt}</label>
                      `
                )
                .join("")}
          </div>
      `;
    questionNumber.textContent = `${index + 1}/${totalQuestions}`;
    if (index === totalQuestions - 2) {
      nextBtn.textContent = "التالي";
    } else {
      nextBtn.textContent = "التالي";
    }
    document.querySelectorAll(`input[name="q${index}"]`).forEach((input, i) => {
      input.addEventListener("change", () => {
        question.selectedScore = question.scores[i];
        question.selectedIndex = i;
        question.selectedAnswer = question.options[i];
      });
    });
  }
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(
    `input[name="q${currentQuestion}"]:checked`
  );
  if (currentQuestion < totalQuestions - 2 && !selected) {
    alertModal.style.display = "flex";
    return;
  }

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
    prevBtn.disabled = currentQuestion === 0;
  } else {
    showResult();
  }
});

prevBtn.addEventListener("click", () => {
  currentQuestion--;
  showQuestion(currentQuestion);
  if (currentQuestion === 0) prevBtn.disabled = true;
});

exitBtn.addEventListener("click", () => {
  testContainer.style.display = "none";
  startTestBtn.style.display = "block";
  resultContainer.style.display = "none";
  questionContainer.style.display = "block";
  navigation.style.display = "flex";
  currentQuestion = 0;
  totalScore = 0;
  questions.forEach((q) => {
    q.selectedScore = 0;
    q.selectedIndex = null;
  });
  prevBtn.disabled = true;
  nextBtn.textContent = "التالي";
  showQuestion(0);
});

function showResult() {
  questionContainer.style.display = "none";
  navigation.style.display = "none";
  resultContainer.style.display = "flex";

  // حساب الدرجة بناءً على الأسئلة التي لها درجات فقط
  totalScore = questions
    .filter((q) => !q.type || q.type !== "text")
    .reduce((sum, q) => sum + (q.selectedScore || 0), 0);
  const percentage = Math.round((totalScore / (15 * 90)) * 100); // 15 سؤالاً فقط
  const circleProgress = document.querySelector(".circle-progress");
  const percentageText = document.querySelector(".percentage");
  const resultTitle = document.getElementById("result-title");
  const resultAdvice = document.getElementById("result-advice");

  // حركة احترافية للنسبة والمؤشر الدائري
  let current = 0;
  const duration = 1500; // مدة الحركة بالمللي ثانية
  const stepTime = 10; // كل كم مللي ثانية تزيد النسبة
  const steps = Math.ceil(duration / stepTime);
  const increment = percentage / steps;

  function animate() {
    current += increment;
    if (current > percentage) current = percentage;
    const displayPercent = Math.round(current);
    percentageText.textContent = `${displayPercent}%`;
    // تحديث لون المؤشر
    const color =
      displayPercent < 50 ? "var(--danger-color)" : "var(--success-color)";
    // conic-gradient
    circleProgress.style.background = `conic-gradient(${color} 0% ${displayPercent}%, transparent ${displayPercent}% 100%)`;
    if (current < percentage) {
      requestAnimationFrame(animate);
    } else {
      // تعيين النسبة النهائية بدقة
      percentageText.textContent = `${percentage}%`;
      circleProgress.style.background = `conic-gradient(${color} 0% ${percentage}%, transparent ${percentage}% 100%)`;
    }
  }
  animate();

  if (percentage < 50) {
    resultTitle.textContent = "تقييمك: دون المتوسط";
  } else if (percentage > 50 && percentage < 75) {
    resultTitle.textContent = "تقييمك: جيد";
  } else if (percentage > 75) {
    resultTitle.textContent = "تقييمك: جيد جداً";
  }
  resultAdvice.textContent =
    percentage < 50
      ? "نصيحة: أنت بحاجة الي دعم معنوي."
      : percentage > 50 && percentage < 70
      ? "نصيحة: نفسية جيدة و لكن اذا كنت تريد استشارة مرحبا بك."
      : "نفسيتك عالي العال";

  const dataToSend = {
    result: `${percentage}%`,
    problemDescription: questions[15].answer || "لم يتم إدخال أي شرح",
  };

  fetch(
    "https://script.google.com/macros/s/AKfycby-T_7B5zNSehqeQazw0cdNJmx6gyjgGbH66i-Z0WSqSDETgLbvGrNzxultjaYPctmO/exec",
    {
      method: "POST",
      mode: "no-cors", // استخدام no-cors لتجنب مشكلة CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }
  )
    .then((response) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
}
// Initialize
showQuestion(0);
