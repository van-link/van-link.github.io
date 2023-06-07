(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);
// CRC Verification Functions
function performCRC16() {
    var inputData = document.getElementById("inputData").value;
var calculatedCRC = crc16(inputData);
document.getElementById("result").textContent = calculatedCRC;
}
function performCRC32() {
    var inputData = document.getElementById("inputData").value;
var calculatedCRC = crc32(inputData);
document.getElementById("result").textContent = calculatedCRC;
}
function crc32(input) {
    var crcTable = generateCRCTable();
var crc = 0xFFFFFFFF;
input = input.trim().replace(/\s+/g, ' ');
var splitInput = input.split(" ");
for (var i = 0; i < splitInput.length; i++) {
        var byte = splitInput[i] & 0xFF;
        crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xFF];
    }

crc = crc ^ 0xFFFFFFFF;
return crc.toString(16).toUpperCase();
}
function generateCRCTable() {
    var crcTable = new Uint32Array(256);

for (var i = 0; i < 256; i++) {
        var crc = i;

for (var j = 0; j < 8; j++) {
            if (crc & 1) {
    crc = (crc >>> 1) ^ 0xEDB88320;
            } else {
    crc = crc >>> 1;
            }
        }

crcTable[i] = crc;
    }

return crcTable;
}
function crc16(input) {
    let crcValue = 0xFFFF;
input = input.trim().replace(/\s+/g, ' ');
var splitInput = input.split(" ");
for (let i = 0; i < splitInput.length; i++) {
    crcValue ^= splitInput[i] & 0xFFFF
        for (let j = 0; j < 8; j++) {
            if (crcValue & 0x0001) {
    crcValue >>= 1
                crcValue ^= 0xA001
            } else {
    crcValue >>= 1
}
        }
    }
return crcValue.toString(16).toUpperCase();
}
// ASCII Converter
function performASCII() {
    var inputData = document.getElementById("inputData").value;
    var result = "";
    for (var i = 0; i < inputData.length; i++) {
        result += inputData.charCodeAt(i).toString(16).toUpperCase() + " ";
        }
    document.getElementById("result").textContent = result;
}
function performHEX() {
    var inputData = document.getElementById("inputData").value;
    var result = "";
    var splitInput = inputData.split(" ");
    for (var i = 0; i < splitInput.length; i++) {
        result += String.fromCharCode(parseInt(splitInput[i], 16));
        }
    document.getElementById("result").textContent = result;
}
function ByteCount() {
    var inputData = document.getElementById("inputData").value;
    var result = 0;
    var ChineseChars = inputData.match(/[\u4e00-\u9fa5]/g);
    if (ChineseChars != null) {
        result = ChineseChars.length;
    }else{
        var input = inputData.replace(/[^\w\s]|_/g, ' ');
        if (input == "") {
            result = 0;
        }else{
            input = input.trim().replace(/\s+/g, ' ');
            var splitInput = input.split(" ");
            result = splitInput.length;
        }
    }
    document.getElementById("result").textContent = result;
}
function removeEx() {
    var inputData = document.getElementById("inputData").value;
    var result = 0;
    var ChineseChars = inputData.match(/[\u4e00-\u9fa5，。！？、；：“”【】（）《》]/g);
    if (ChineseChars != null) {
        result = ChineseChars.join("");
    } else {
        var input = inputData.replace(/[^\w\s]|_/g, ' ');
        input = input.trim().replace(/\s+/g, ' ');
        result = input;
    }
    document.getElementById("result").textContent = result;
}
// const url = 'https://deepl-translator.p.rapidapi.com/translate';
// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '9554a03574mshddd10dba0ae2f2dp161721jsne6f69bd2ca83',
//         'X-RapidAPI-Host': 'deepl-translator.p.rapidapi.com'
//     },
//     body: {
//         text: 'This is a example text for translation.',
//         source: 'EN',
//         target: 'ZH'
//     }
// };
// const generateAItrans = async () =>{
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// const API_URL = "https://api.openai.com/v1/chat/completions";
// const API_KEY = "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";

// const promptInput = document.getElementById("inputData");
// const promptInputoption = document.getElementById("options");

// const frEnglish = "translation from English to Chinese";
// const frChinese = "把这段中文翻译成英文";

// const loader = document.getElementById("loading");
// let controller = null; // Store the AbortController instance

// const generateAItrans = async () => {
//     // Alert the user if no prompt value
//     if (!promptInput.value) {
//         alert("Please enter a prompt.");
//         return;
//     }
//     loader.classList.add("loader");
//     var result = "";
//     // Create a new AbortController instance
//     controller = new AbortController();
//     const signal = controller.signal;
//     var promptInputValue = ""
//     if (promptInputoption.value == "frChinese") {
//         promptInputValue = promptInput.value + "," + frChinese + ",只显示最终结果";
//     }else if (promptInputoption.value == "frEnglish"){
//         promptInputValue = promptInput.value + "," + frEnglish + ",只显示最终结果";
//     }else{
//         promptInputValue = promptInput.value;
//     }
//     try {
//         // Fetch the response from the OpenAI API with the signal from AbortController
//         const response = await fetch(API_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${API_KEY}`,
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "user", content: promptInputValue }],
//                 max_tokens: 100,
//                 stream: true, // For streaming responses
//             }),
//             signal,
//         });
//         // Read the response as a stream of data
//         const reader = response.body.getReader();
//         const decoder = new TextDecoder("utf-8");
//         // Massage and parse the chunk of data
//         while(true){
//             const { done, value } = await reader.read()
//             if (done) {
//                 break;
//             }

//             const chunk = decoder.decode(value);
//             const lines = chunk.split("\\n");
//             const dataArray = lines.filter((line) => line.startsWith("data: "))[0];
//             const regex = /"content":"([^"]*)"/g;
//             const contents = [];
//             let match;
//             while ((match = regex.exec(dataArray)) !== null) {
//                 contents.push(match[1]);
//             }
//             result += contents;          
//         }
//         document.getElementById("result").textContent = result;
//         loader.classList.remove("loader");  
//     } catch (error) {
//         // Handle fetch request errors
//         if (signal.aborted) {
//             document.getElementById("result").textContent = "Request aborted.";
//         } else {
//             document.getElementById("result").textContent = "Error occurred while generating.";
//         }
//     } finally {

//     }
// };

