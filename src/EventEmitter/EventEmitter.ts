const EventEmitter = require('events');

class WithLog extends EventEmitter {
    async execute(asyncFunc, ...args) {
        this.emit('begin');
        try {
            console.time('execute');
            const data = await asyncFunc(...args);
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        } catch(err) {
            this.emit('error', err);
        }
    }}

const withLog = new WithLog();

module.exports = () => {
    /**
     * on - аналог addEventListener,
     */
    withLog.on('begin', () => console.log('About to execute'));
    withLog.on('end', () => console.log('Done with execute'));

    withLog.execute(() => console.log('*** Executing task ***'));
};


