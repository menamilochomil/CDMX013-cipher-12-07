const cipher = {
  //key: value (first key for encoding)
  encode: (offset, textEncode) => {

    //Conditionals for throwing TypeError. This throws error too: if(offset == 0) throw "No es un número válido";
    if (offset == 0) throw (TypeError("Invalid number"));
    if (offset == null || textEncode == []) throw (TypeError("Please write the values"));

    //Working with loops
    let yourTextEncode = [];
    for (let i = 0; i < textEncode.length; i++) {
      let newCode = textEncode.charCodeAt(i);
      let offsetNum = parseInt(offset);

      //Fomula Caesar cipher:  ((ASCII - 65 + #offset)% 26 +65)
      if (newCode <= 90 && newCode >= 65) {
        let inputTextUpper = String.fromCharCode((newCode - 65 + offsetNum) % 26 + 65);
        yourTextEncode += inputTextUpper;
      } else if (newCode <= 122 && newCode >= 97) {
        let inputTextLower = String.fromCharCode((newCode - 97 + offsetNum) % 26 + 97);
        yourTextEncode += inputTextLower;
      } else {
        let inputTextSpecial = String.fromCharCode(newCode);
        yourTextEncode += inputTextSpecial;
      }
    }
    return yourTextEncode;
  },

  //second key for decoding
  decode: function (offset, textDecode) {

    if (offset == 0) throw (TypeError("Invalid number"));
    if (offset == null || textDecode == []) throw (TypeError("Please write the values"));

    let yourTextDecode = [];
    for (let i = 0; i < textDecode.length; i++) {
      let newDecode = textDecode.charCodeAt(i);
      let offsetNum = parseInt(offset);
      //Caesar decryption designed formula ((x -90 - #posición) % 26 +90)
      if (newDecode <= 90 && newDecode >= 65) {
        let inputTextUpper = String.fromCharCode((newDecode - 90 - offsetNum) % 26 + 90);
        yourTextDecode += inputTextUpper;
      } else if (newDecode <= 122 && newDecode >= 97) {
        let inputTextLower = String.fromCharCode((newDecode - 122 - offsetNum) % 26 + 122);
        yourTextDecode += inputTextLower;
      }else {
        let inputTextSpecial = String.fromCharCode(newDecode);
        yourTextDecode += inputTextSpecial;
      }
    }
    return yourTextDecode;
  }

};

export default cipher;