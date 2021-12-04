({
    name: "NeoPixel", // Category Name
    description: "Write light to NeoPixel for RP2 chip",
    author: "microBlock",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#27AE60", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="neopixel_setup">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="length">
                        <shadow type="math_number">
                            <field name="NUM">8</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_set_color1">
                    <value name="n">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_set_color2">
                    <value name="n">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "neopixel_fill_color1",
        {
            xml: `
                <block type="neopixel_fill_color2">
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "neopixel_show",
        "neopixel_clear",
        {
            xml: `
                <block type="neopixel_rainbow">
                    <value name="wait">
                        <shadow type="math_number">
                            <field name="NUM">30</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_set_brightness">
                    <value name="brightness">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ],
    chip: [
        "RP2" // Chip support
    ]
});
