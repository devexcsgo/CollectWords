Vue.createApp({
    data() {
        return {
            word: '',
            words: [],
            message: ''
        };
    },
    methods: {
        saveWord() {
            if (this.word) {
                this.words.push(this.word);
                this.word = '';
            }
        },
        showWords() {
            if (this.words.length === 0) {
                this.message = 'empty';
            } else {
                this.message = this.words.join(', ');
            }
        },
        clearWords() {
            this.words = [];
            this.message = '';
        }
    },
    computed: {
        result() {
            return this.words.length === 0 ? 'empty' : this.words.join(', ');
        }
    }
}).mount("#app");