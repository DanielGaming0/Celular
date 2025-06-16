function copiarPix() {
    const chavePix = document.getElementById('pix').innerText;
    navigator.clipboard.writeText(chavePix).then(() => {
        alert('Chave Pix copiada com sucesso!');
    }, (err) => {
        alert('Erro ao copiar a chave Pix: ', err);
    });
}