document.addEventListener('DOMContentLoaded', () => {
    // screens
    const setupScreen = document.getElementById('setup-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    // elements
    const totalQCount = document.getElementById('total-q-count');
    const questionProgress = document.getElementById('question-progress');
    const scoreDisplay = document.getElementById('score-display');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const finalScore = document.getElementById('final-score');
    const timerDisplay = document.getElementById('timer-display');
    
    // buttons
    const startBtn = document.getElementById('start-btn');
    const examBtn = document.getElementById('exam-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizQuestions = [];
    
    // Timer variables
    let timerInterval = null;
    let timeLeft = 0;

    // initialize
    if (typeof questions !== 'undefined') {
        totalQCount.textContent = questions.length;
    }

    startBtn.addEventListener('click', () => startQuiz(false));
    if (examBtn) examBtn.addEventListener('click', () => startQuiz(true));
    prevBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex - 1));
    nextBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex + 1));
    finishBtn.addEventListener('click', endQuiz);
    restartBtn.addEventListener('click', () => switchScreen(setupScreen)); // Go back to setup to choose mode
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function startQuiz(isExamMode) {
        if (!questions || questions.length === 0) {
            alert('Không tìm thấy dữ liệu câu hỏi!');
            return;
        }
        
        // Deep copy
        let allQuestions = JSON.parse(JSON.stringify(questions));
        
        // Shuffle all questions
        shuffleArray(allQuestions);
        
        // If exam mode, take only 60 questions
        if (isExamMode && allQuestions.length >= 60) {
            quizQuestions = allQuestions.slice(0, 60);
        } else {
            quizQuestions = allQuestions;
        }

        
        // Shuffle options for each question
        quizQuestions.forEach(q => {
            if (q.answer !== null && q.answer !== undefined) {
                let correctAnswerText = q.options[q.answer];
                shuffleArray(q.options);
                q.answer = q.options.indexOf(correctAnswerText);
            }
        });

        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        
        // Start Timer if exam mode
        clearInterval(timerInterval);
        if (isExamMode) {
            timeLeft = 60 * 60; // 60 minutes
            timerDisplay.style.display = 'inline';
            timerDisplay.textContent = `Thời gian: ${formatTime(timeLeft)}`;
            
            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = `Thời gian: ${formatTime(timeLeft)}`;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    alert("Đã hết thời gian làm bài!");
                    endQuiz();
                }
            }, 1000);
        } else {
            timerDisplay.style.display = 'none';
        }
        
        switchScreen(quizScreen);
        loadQuestion(0);
        updateScore();
    }

    function switchScreen(screen) {
        setupScreen.classList.remove('active');
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        screen.classList.add('active');
    }

    function loadQuestion(index) {
        if (index < 0 || index >= quizQuestions.length) return;
        currentQuestionIndex = index;
        const q = quizQuestions[index];
        
        questionProgress.textContent = `Câu ${index + 1}/${quizQuestions.length}`;
        questionText.textContent = q.question;
        
        optionsContainer.innerHTML = '';
        q.options.forEach((optText, i) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.textContent = optText;
            
            // if already answered
            if (userAnswers[index] !== null) {
                if (i === q.answer) {
                    div.classList.add('correct');
                }
                if (userAnswers[index] === i && i !== q.answer) {
                    div.classList.add('wrong');
                }
            } else {
                div.addEventListener('click', () => selectOption(i, div));
            }
            
            optionsContainer.appendChild(div);
        });

        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === quizQuestions.length - 1 ? 'Hoàn thành' : 'Câu Tiếp';
        
        // If on last question, next button acts as finish
        if(index === quizQuestions.length - 1) {
            nextBtn.onclick = endQuiz;
        } else {
            nextBtn.onclick = () => loadQuestion(currentQuestionIndex + 1);
        }
    }

    function selectOption(selectedIndex, element) {
        if (userAnswers[currentQuestionIndex] !== null) return; // already answered
        
        const q = quizQuestions[currentQuestionIndex];
        userAnswers[currentQuestionIndex] = selectedIndex;
        
        const allOptions = optionsContainer.children;
        
        if (selectedIndex === q.answer) {
            element.classList.add('correct');
            score++;
            updateScore();
        } else {
            element.classList.add('wrong');
            if (q.answer !== null && q.answer !== undefined) {
                allOptions[q.answer].classList.add('correct');
            }
        }
    }

    function updateScore() {
        scoreDisplay.textContent = `Điểm: ${score}`;
    }

    function endQuiz() {
        clearInterval(timerInterval);
        switchScreen(resultScreen);
        finalScore.textContent = `Bạn đã trả lời đúng ${score}/${quizQuestions.length} câu.`;
    }
});
