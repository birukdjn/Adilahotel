// // Toggle FAQ answers
// const faqQuestions = document.querySelectorAll('.faq-question');

// faqQuestions.forEach(question => {
//   question.addEventListener('click', () => {
//     const answer = question.nextElementSibling;
//     if (answer.style.display === 'block') {
//       answer.style.display = 'none';
//     } else {
//       answer.style.display = 'block';
//     }
//   });
// });


// Toggle FAQ answers
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.style.display = 'none';

     

    });

    // Toggle the clicked question's answer
    const answer = question.nextElementSibling;
    answer.style.display = 'block';

     
    
  });
});
