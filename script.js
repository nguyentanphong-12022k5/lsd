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
    
    // buttons
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = []; // store user selected index
    let quizQuestions = []; // store randomized questions

    // initialize
    if (typeof questions !== 'undefined') {
        totalQCount.textContent = questions.length;
    }

    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex - 1));
    nextBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex + 1));
    finishBtn.addEventListener('click', endQuiz);
    restartBtn.addEventListener('click', startQuiz);
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startQuiz() {
        if (!questions || questions.length === 0) {
            alert('Không tìm thấy dữ liệu câu hỏi!');
            return;
        }
        
        // Deep copy to randomize without affecting original array
        quizQuestions = JSON.parse(JSON.stringify(questions));
        
        // Shuffle questions
        shuffleArray(quizQuestions);
        
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
        switchScreen(resultScreen);
        finalScore.textContent = `Bạn đã trả lời đúng ${score}/${quizQuestions.length} câu.`;
    }
});
