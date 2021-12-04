Blockly.Python['neopixel_setup'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC) || '0';
  
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_neopixel_import_neopixel'] = 'from neopixel import NeoPixel';

  var code = `strip = NeoPixel(${value_length}, 0, ${value_pin}, "GRB"); strip.brightness(int(50 * 255 / 100))\n`;
  return code;
};

Blockly.Python['neopixel_set_color1'] = function(block) {
  var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var code = `strip.set_pixel(${value_n}, (int(${red}), int(${green}), int(${blue})))\n`;
  return code;
};

Blockly.Python['neopixel_set_color2'] = function(block) {
  var value_n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  var code = `strip.set_pixel(${value_n}, (int(${value_red}), int(${value_green}), int(${value_blue})))\n`;
  return code;
};

Blockly.Python['neopixel_fill_color1'] = function(block) {
  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var code = `strip.fill((int(${red}), int(${green}), int(${blue})))\n`;
  return code;
};

Blockly.Python['neopixel_fill_color2'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  var code = `strip.fill((int(${value_red}), int(${value_green}), int(${value_blue})))\n`;
  return code;
};

Blockly.Python['neopixel_show'] = function(block) {
  var code = 'strip.show()\n';
  return code;
};

Blockly.Python['neopixel_clear'] = function(block) {
  var code = 'strip.fill((0, 0, 0))\n';
  return code;
};

Blockly.Python['neopixel_rainbow'] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC) || '30';

  Blockly.Python.definitions_['from_time_import_sleep_ms'] = 'from time import sleep_ms';

  var functionName = Blockly.Python.provideFunction_(
    'neopixelRainbow',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(strip, wait):',
    '  for j in range(256):',
    '    for i in range(strip.num_leds):',
    '      WheelPos = (i * 1 + j) & 255',
    '      if WheelPos < 85:',
    '        strip.set_pixel(i, (int(WheelPos * 3), int(255 - WheelPos * 3), 0))',
    '      elif WheelPos < 170:',
    '        WheelPos -= 85',
    '        strip.set_pixel(i, (int(255 - WheelPos * 3), 0, int(WheelPos * 3)))',
    '      else:',
    '        WheelPos -= 170',
    '        strip.set_pixel(i, (0, int(WheelPos * 3), int(255 - WheelPos * 3)))',
    '    strip.show()',
    '    sleep_ms(wait)']);

  var code = `${functionName}(strip, ${value_wait})\n`;
  return code;
};

Blockly.Python['neopixel_set_brightness'] = function(block) {
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  var code = `strip.brightness(int(${value_brightness} * 255 / 100))\n`;
  return code;
};
