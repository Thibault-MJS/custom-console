const {red, green, yellow, magenta} = require('chalk');
const day = require('dayjs');

module.exports = class CustomConsole {
    
    /**
     * Constructeur CustomConsole
     * 
     * @param {Object} opt {datetime: true, author: true}
     */
    constructor(opt) {
        this.opt = Object.assign({}, {
            datetime: true,
            author: true
        }, opt);
    }

    /**
     * Renvoie un message de log personnalisé
     * 
     * @param {String} content 
     * @param {String|null} author optionnel
     */
    log(content, author) {
        if (!content || typeof content !== "string") throw new TypeError('content must be a string object');
        let finalContent = `[${magenta('LOG')}] `;
        if (author && this.opt.author) finalContent += `[${author.toUpperCase()}] `; 
        if (this.opt.datetime) finalContent += `[${day(new Date()).format('HH:mm:ss')}] `;
        finalContent += `- ${content}`;
        console.log(finalContent);
        return true;
    }

    /**
     * Renvoie un message d'erreur personnalisé
     * 
     * @param {String} content 
     * @param {String|null} author optionnel
     */
     error(content, author) {
        if (!content || typeof content !== "string") throw new TypeError('content must be a string object');
        let finalContent = `[${red('ERROR')}] `;
        if (author && this.opt.author) finalContent += `[${author.toUpperCase()}] `; 
        if (this.opt.datetime) finalContent += `[${day(new Date()).format('HH:mm:ss')}] `;
        finalContent += `- ${content}`;
        console.log(finalContent);
        return true;
    }

    /**
     * Renvoie un message d'avertissement personnalisé
     * 
     * @param {String} content 
     * @param {String|null} author optionnel
     */
     warn(content, author) {
        if (!content || typeof content !== "string") throw new TypeError('content must be a string object');
        let finalContent = `[${yellow('WARN')}] `;
        if (author && this.opt.author) finalContent += `[${author.toUpperCase()}] `; 
        if (this.opt.datetime) finalContent += `[${day(new Date()).format('HH:mm:ss')}] `;
        finalContent += `- ${content}`;
        console.log(finalContent);
        return true;
    }

    /**
     * Renvoie un message de succès personnalisé
     * 
     * @param {String} content 
     * @param {String|null} author optionnel
     */
     success(content, author) {
        if (!content || typeof content !== "string") throw new TypeError('content must be a string object');
        let finalContent = `[${green('SUCCESS')}] `;
        if (author && this.opt.author) finalContent += `[${author.toUpperCase()}] `; 
        if (this.opt.datetime) finalContent += `[${day(new Date()).format('HH:mm:ss')}] `;
        finalContent += `- ${content}`;
        console.log(finalContent);
        return true;
    }
}



lol.success('youh', "hello")