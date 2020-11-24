class Notebook {
    constructor(builder) {
        this.model = builder.model;
        this.isProcessorBroken = builder.isProcessorBroken || false;
        this.isVideocardBroken = builder.isVideocardBroken || false;
        this.isScreenBroken = builder.isScreenBroken || false;
    }
    getDescription () {
        console.log(`this is notebook ${this.model} with ${this.isProcessorBroken ? 'broken processor' : 'not broken processor'}
        and with ${this.isVideocardBroken ? 'broken videocard' : 'not broken videocard'}. Screen is ${this.isScreenBroken ? 'broken' : 'not broken'}.`);
    }
}

class ProfessionalComputer {
    constructor(builder) {
        this.model = builder.model;
        this.isProcessorBroken = builder.isProcessorBroken || false;
        this.isVideocardBroken = builder.isVideocardBroken || false;
    }
    getDescription () {
        console.log(`this is PC ${this.model} with ${this.isProcessorBroken ? 'broken processor' : 'not broken processor'}
        and with ${this.isVideocardBroken ? 'broken videocard' : 'not broken videocard'}.`);
    }
}

class NotebookExpert {
    constructor(model) {
        this.model = model;
    }
    getDescription() {
        console.log(`i can fix notebooks only (even this ${this.model}) `)
    }
}

class PCExpert {
    constructor(model) {
        this.model = model;
    }
    getDescription() {
        console.log(`i can fix PCs only (even this ${this.model}) `)
    }
}


class NotebookFactory {
    constructor(model) {
        this.model = model;
    }
    checkProcessor() {
        this.isProcessorBroken = Math.random() < 0.5;
        return this;
    }
    checkVideocard() {
        this.isVideocardBroken = Math.random() < 0.5;
        return this;
    }
    checkScreen() {
        this.isScreenBroken = Math.random() < 0.7;
        return this;
    }
    prepareToFixComputer () {
        return new Notebook(this);
    }
    addFixer () {
        return new NotebookExpert(this.model);
    }
}

class PCFactory {
    constructor(model) {
        this.model = model;
    }
    checkProcessor() {
        this.isProcessorBroken = Math.random() < 0.5;
        return this;
    }
    checkVideocard() {
        this.isVideocardBroken = Math.random() < 0.5;
        return this;
    }
    prepareToFixComputer () {
        return new ProfessionalComputer(this);
    }
    addFixer () {
        return new PCExpert(this.model);
    }
}

let newNotebookToFix = new NotebookFactory('Asus');

let computer1 = newNotebookToFix.checkProcessor().checkVideocard().checkScreen().prepareToFixComputer();
let expert1 = newNotebookToFix.addFixer();

computer1.getDescription();
expert1.getDescription();

let newPCToFix = new PCFactory('Lenovo');

let computer2 = newPCToFix.checkProcessor().checkVideocard().prepareToFixComputer();
let expert2 = newPCToFix.addFixer();

computer2.getDescription();
expert2.getDescription();

