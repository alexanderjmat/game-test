class hash {
    constructor(str) {
        this.str = str;
        this.counterArr = [];
    }
    randomChar() {
        let num = Math.floor(Math.random() * this.str.length)
        return this.str[num]
    }
    compare() {
        let counter = 0;
        let str1 = '';
        let str2 = '';
        const run = () => {
            for (let i = 0; i < this.str.length; i++) {
                str1 += this.str[Math.floor(Math.random() * this.str.length)]
                str2 += this.str[Math.floor(Math.random() * this.str.length)]
            }
            console.log([str1, str2])
            if (counter >= 10) {
                function newFunc() {compare: {
                break compare;
            }}
            newFunc()
            }
            if (str1 !== str2) {
                counter++;
                str1 = '';
                str2 = '';
                run();
            }
            else {
                console.log(counter);
                this.counterArr.push(counter);
            }
        }
        run()
        return;
    }
}

function loopCompare(className) {
    for (let i = 0; i < 10; i++) {
        className.compare();
    }
}

const one = new hash('a');
const two = new hash('ab')
const three = new hash('abc')
const four = new hash('abcd')
const five = new hash('abcde')
// three.compare();

const twoArr = [3, 1, 2, 1, 2, 0, 0, 1, 1, 0]
const threeArr = [6, 21, 10, 21, 21, 1, 0, 55, 5, 0]
const fourArr = [281, 61, 224, 218, 1106, 324, 13, 11, 290, 165]
