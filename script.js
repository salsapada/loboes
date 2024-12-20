function abrirVideo(videoFile) {
    // Exibe o modal de vídeo
    var modal = document.getElementById('modal-video');
    var video = document.getElementById('video-modal');
    var source = document.getElementById('video-source');

    // Define o arquivo de vídeo
    source.src = videoFile;
    
    // Carrega o vídeo
    video.load();

    // Exibe o modal
    modal.classList.remove('hidden');
}

function fecharVideo() {
    // Fecha o modal
    var modal = document.getElementById('modal-video');
    modal.classList.add('hidden');
    
    // Para o vídeo quando o modal é fechado
    var video = document.getElementById('video-modal');
    video.pause();
    video.currentTime = 0;
}
let audioAtual = null; // Variável para armazenar o áudio atual

function playAudio(audioFile) {
    // Se houver um áudio tocando, pare-o
    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    // Reproduza o novo áudio
    audioAtual = new Audio(audioFile);
    audioAtual.play();
}
