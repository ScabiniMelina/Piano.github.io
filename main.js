let piano = document.getElementById("piano");
let notes = ["C","D","E","F","G","A","B"];
let html = "";
let keys = "q1w2e3r4t5"
for (let octave = 4; octave < 7; octave++) {
    for (let i in notes) {
        html += ' <div class="contentPiano_whiteNote note">';
        console.log(notes[i]);
        if(notes[i] != 'E' && notes[i] != 'B' ){
            html += ` <div class='contentPiano_blackNote note' data-code='${notes[1]}${octave}'></div>`;
        }
        html += '</div>';
    }
}
piano.innerHTML = html;

let notesElement = document.getElementsByClassName('note');
console.log(notesElement)
let keys =['tab','q','w','e','r','t','y']