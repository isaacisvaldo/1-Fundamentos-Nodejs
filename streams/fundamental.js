// process.stdin
// .pipe(process.stdout)

import { Readable } from "node:stream";
//Trabalhar com os dados antes de estart terminado de ser lidos (conceitos de streaming)
class OneTuHundredStream extends Readable {
  index = 1;
  _read() {
   setTimeout(()=>{
    const i = this.index++;
    if(i >100){
        this.push(null)
    }else{
        const buffer = Buffer.from(String(i))
        this.push(buffer)
    }
   },1000)
  }
}
new OneTuHundredStream()
.pipe(process.stdout)
