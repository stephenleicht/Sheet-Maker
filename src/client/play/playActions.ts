export function rollDie(roll: string) {
    const textArea: HTMLTextAreaElement | null = document.querySelector('#textchat-input textarea');
    const button: HTMLButtonElement | null = document.querySelector('#textchat-input button');

    if (!textArea || !button) {
        return;
    }

    textArea.value = `/roll ${roll}`;
    button.click();
}