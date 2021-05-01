const synth = new Tone.PolySynth(Tone.Synth).toDestination(); //Devuelve un objeto que tiene como método triggerAttackRelease
let piano = document.getElementById("piano");
let notes = ["C","D","E","F","G","A","B"];
let html = "";
let keys =['Tab','1','q','2','w','e','4','r','5','t','6','y','u','8','i','9','o','p',"'",'Dead','¿','+','Backspace','Enter'];

for (let octave = 4; octave < 6; octave++) {
    for (let i in notes) {
        html += `<div class="contentPiano_whiteNote note" data-code='${notes[i]}#${octave}'>`;
        console.log(notes[i]);
        if(notes[i] != 'E' && notes[i] != 'B' ){
            html += ` <div class='contentPiano_blackNote note' data-code='${notes[i]}#${octave}'></div>`;
        }
        html += '</div>';
    }
}
let notesElement = document.querySelectorAll('.note');
piano.innerHTML = html;

document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    if(!e.repeat){
        keys.forEach((key,index) => {
            //Para eliminar el comportamiento por defecto que tiene una tecla al presionarse "Tab"
            // Si la tecla presionada es igual a alguna de las teclas del teclado que le corresponde una melodía
            if(key /*Contenido del arreglo del teclado en determinada posición*/ == e.key /*Tecla presionada*/){
                notesElement[index].style.background = (notesElement[index].classList.contains('contentPiano_whiteNote')) ?'#ccc' :'#A3A3A3';
                synth.triggerAttackRelease(notesElement[index].dataset.code,'1a0n');
            }
        });
    }
})

document.addEventListener("keyup",(e)=>{
    keys.forEach((key,index) => {
        if(key  == e.key){
            notesElement[index].style.background = (notesElement[index].classList.contains('contentPiano_whiteNote')) ?'var(--whiteColor)' :'var(--blackColor)';
        }
    });
})
