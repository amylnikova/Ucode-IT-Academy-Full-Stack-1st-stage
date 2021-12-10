let text = document.getElementById('textInput'),
    notes = document.getElementById('notesArchive');
exec();
document.querySelector('.add-btn').addEventListener('click',
function addText() {
    if (text.value === '') {
        alert(`It's empty. Try to input something in "Text input".`)
    } else if(text.value) {
        document.cookie = Date.now() + '=' + text.value + '; expires=' + new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        
    }
    text.value = '';
    exec(); 
});
document.querySelector('.clear-btn').addEventListener('click', 
function clearNotes() {
    if (confirm('Are you sure?')) {
        if ('cookie') {
            cookieToArr(document.cookie).forEach(item => {
                document.cookie = `${item[0]}=1; max-age=-1` 
            });
        }      
    }
    exec();
});

function cookieToArr(item) {
    let obj = {};
    item.split('; ').forEach(item => {
        obj[item.split('=')[0]] = item.split('=')[1];
    });
    return Object.entries(obj);
};

function exec() {
    let exec = '';
    if (document.cookie){
        cookieToArr(document.cookie).forEach(item => {
            exec += `--> ${item[1]}\n`
        });
    }else {
        exec += ''
    }
    notes.innerHTML = exec;
} 



