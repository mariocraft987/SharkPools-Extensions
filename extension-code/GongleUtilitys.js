/*
@Under MIT LICENSE (C)
@Version 0.5
@Created by Mariocraft987
*/

(function (Scratch) {
  "use strict";
  class GongleUtilitys {
    getInfo() {
      return {
        id: 'gongleisbackloll',
        name: 'Gongle Utitlitys',
        color1: '#33cfff',
        color2: '#2ce8d6',
        blocks: [
          {
            opcode: 'command',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Command [STR]',
            disableMonitor: true,
            arguments: {
               STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "/help"
              },
            }
          },
          {
            opcode: 'mobile',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'On moblie device?',
            disableMonitor: true,
          },
          {
            opcode: 'super',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[STR] === [STG]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello"
              },
              STG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello"
              },
            }
          },
          {
            opcode: 'fake',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true?',
            disableMonitor: true,
          },
          {
            opcode: 'text',
            blockType: Scratch.BlockType.REPORTER,
            text: '"[STR]"',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello, world!"
              },
            }
          },
          {
            opcode: 'replace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'In [text] replace [STR] with [replacement]',
            disableMonitor: true,
            arguments: {
               text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple, banana, carrot"
              },
               STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "carrot"
              },
               replacement: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "pear"
              },
            }
          },
            
        ],
      };
    }
    command(args) {
    let q = args.STR
      console.log(q)
      if (q == "/help") {
        console.log(">help")
        console.log("/alert")
        console.log("/getvar")
        }else if (q == "/alert") {
        alert(true)
        }else if (q == "/getvar") {
        console.log(true)
        }else{
      console.error("no command in library that shows "+q)
        }
    }
    mobile(args) {
      return navigator.userAgentData.mobile;
    }
    fake(args) {
      return "Imposter Reporter dressed as a Boolean!!"
    }
    super(args) {
      return args.STR === args.STG
    }
    text(args) {
      return args.STR
    }
    replace(args) {
      return args.text.replaceAll(args.STR, args.replacement)
    }

  }
  
  Scratch.extensions.register(new GongleUtilitys())
})(Scratch);
