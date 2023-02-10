export function isStrEn(str:string):boolean{

  let alPhabets:string = 'abcdefghijklmnopqrstuvwxyz';
  let alPhabetsArr:string [] = alPhabets.split('');
  let capitalLetterAlPhabet: string [] = alPhabetsArr.map((x:string) => x.toUpperCase());
  let speacialChars: string [] = ['-', '.', '_','/', ',','<','>','"',';',':',' '];
  const chars: string [] = [...alPhabetsArr, ...capitalLetterAlPhabet, ...speacialChars];
  
  // convert str to array
  const inputStr: string[] = str.split('');
  // initialize as true
  var isEn:boolean = true;
  for(let j:number=0;j<inputStr.length;j++){
      let validEn=false;
      for(let i:number = 0; i < chars.length; i++){
        if(chars[i]===inputStr[j]){
          validEn = true;
        }
      }
      console.log(inputStr[j])
      if(!validEn){
        isEn = false;
        return isEn; // String is not English 
      }
  }

  return false;

}