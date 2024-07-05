

export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

export const downloadMedia = (e, originalFile) => {
    e.preventDefault();
    try{
        fetch(originalFile)
        .then(res => res.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = "none";
            a.href = url;

            const nameSplit = originalFile.split("/");
            const duplicatName = nameSplit.pop();

            a.download = `${duplicatName}`;

            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(err => console.log("Error while downloading media", err.message));
    } catch (err) {
        console.log("Error while downloading media", err.message);
    }
}