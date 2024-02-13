



class Option {
    constructor(name, liberalEffect, rightEffect, leftEffect, tsarEffect, executable) {
        this.name = name;
        this.liberalEffect = liberalEffect;
        this.rightEffect = rightEffect;
        this.leftEffect = leftEffect;
        this.tsarEffect = tsarEffect;
        this.executable = executable;
    }

    execute() {
        if (this.executable) {
            console.log("EXECUTABLE");
           document.getElementById('slider-left').value+=this.leftEffect;
           document.getElementById('slider-right').value+=this.rightEffect;
           document.getElementById('slider-tsar').value+=this.tsarEffect;
           document.getElementById('slider-liberals').value+=this.liberalEffect;


        }
    }
}

class HistoryEvent {
    constructor(name, description, date, options) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.options = options.map(option => {
            return new Option(option.name, option["liberals effect"], option["right effect"], option["left effect"], option["tsar effect"],true);
        });
    }

    showDescription() {
        let descriptionWindow = document.createElement('div');
        descriptionWindow.classList.add('description-window');
    
        let title = document.createElement('h2');
        title.textContent = this.name;
        descriptionWindow.appendChild(title);
    
        let desc = document.createElement('p');
        desc.textContent = this.description;
        descriptionWindow.appendChild(desc);
        pauseTimer()

        this.options.forEach(option => {
            let optionButton = document.createElement('button'); // Создаем кнопку для опции
            optionButton.textContent = option.name; // Устанавливаем текст кнопки
            optionButton.classList.add('option-button'); // Добавляем класс для стилизации
            optionButton.addEventListener('click', () => {
                console.log("click");
                console.log(option)
                option.execute(); // При клике на кнопку выполняем соответствующую опцию
                descriptionWindow.remove(); // Удаляем окно HistoryEvent после выполнения опции
                startTimer()
            });
            descriptionWindow.appendChild(optionButton); // Добавляем кнопку в описание
        });
        

        // Add description window to the document body
        document.body.appendChild(descriptionWindow);
    }
}



function executeEventsAtTime(timerValue) {
    const eventData = events[timerValue];
    if (eventData===null){
        return 0;
    }
    if (eventData) {
        const event = new HistoryEvent(eventData.name,  eventData.description, eventData.date, eventData.options);
        event.showDescription();
    }
}

