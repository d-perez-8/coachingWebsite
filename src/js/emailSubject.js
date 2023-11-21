function updateSubject(username) {
    console.log(`Hi ${username}!`);
    return document.getElementById("output-email-subject").value = `${username} has emailed you from whatcomesaftercoaching.com`;
}