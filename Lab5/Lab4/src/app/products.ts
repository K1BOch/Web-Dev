export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: number;

}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h00/h5a/84727487037470.jpg?format=gallery-large"],
    name: 'GPU ZOTAC GAMING RTX 4060 Twin Edge ZT-D40600E-10M 8 GB',
    price: 175990,
    description: 'Series: GeForce RTX 40 Series\n' +
        'GPU frequency: 2460 MHz\n' +
        'Video memory: 8 GB\n' +
        'Memory type: GDDR6\n' +
        'Length: 221.4mm\n' +
        'Recommended power supply power: 500 watt',
    link: 'https://kaspi.kz/shop/p/zotac-gaming-rtx-4060-twin-edge-zt-d40600e-10m-8-gb-112525286/?c=750000000',
    rating: 3,

  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/he1/hb7/65561445498910.jpg?format=gallery-large"],
    name: 'CPU AMD Ryzen 5 7600X BOX',
    price: 118402,
    description: 'CPU type: Ryzen 5\n' +
        'Socket: AM5\n' +
        'Base frequency: 4700 MHz\n' +
        'Max frequency: 5300 MHz\n' +
        'Delivery type: BOX\n' +
        'Number of cores: 6',
    link: 'https://kaspi.kz/shop/p/amd-ryzen-5-7600x-box-106787712/?c=750000000',
    rating: 5,

  },
  {
    id: 3,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd9/hd4/84049616764958.jpg?format=gallery-medium"],
    name: 'Logitech G Pro X Superlight 2 ',
    price: 81990,
    description: 'Sensor type: optical laser\n' +
        'Connection type: wireless\n' +
        'Interface: USB\n' +
        'Design: right hand\n' +
        'Gaming: Yes\n' +
        'Optical sensor resolution: 32000 dpi',
    link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000',
    rating: 5,

  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h86/h56/84176814211102.jpg?format=gallery-medium"],
    name: 'Screen Samsung LS32CG510EIXCI BLACK',
    price: 137988,
    description: 'Diagonal: 32.0 inch\n' +
        'Resolution: 2560x1440\n' +
        'Brightness: 300.0 cd/m2\n' +
        'Response time: 1.0 ms\n' +
        'Max. Frame rate: 165.0 Hz\n' +
        'Inputs: DisplayPort, HDMI',
    link: 'https://kaspi.kz/shop/p/samsung-ls32cg510eixci-chernyi-113806044/?c=750000000',
    rating: 5,

  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h70/hb2/63763877920798.jpg?format=gallery-medium"],
    name: 'SSD Kingston SA400S37 480 GB',
    price: 17990,
    description: 'type: SSD\n' +
        'Form factor: 2.5\n' +
        'Capacity: 480.0 GB\n' +
        'Interfaces: SATA\n' +
        'Read speed: 500.0 MB/s\n' +
        'Write speed: 450.0 MB/s',
    link: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=750000000',
    rating: 2,

  },{
    id:6,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h20/h51/69644407210014.jpg?format=gallery-medium"],
    name:"Keyboard VARMILO Beijing Opera V2 VEA108 Grey",
    price:83600,
    description:"Design: multimedia\n" +
        "Type: mechanical\n" +
        "Purpose: for desktop computer\n" +
        "Connection type: wired\n" +
        "mechanical key type: Cherry MX Brown",
    link:"https://kaspi.kz/shop/p/varmilo-beijing-opera-v2-vea108-seryi-109178429/?c=750000000",
    rating: 4,

  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hc8/h8e/85042181079070.jpg?format=gallery-medium"],
    name:"Laptop Acer Nitro 5 ANV15-51 NH.QNDER.002 Black",
    price:389868,
    description:"Diagonal: 15.6 inches\n" +
        "Resolution: 1920x1080\n" +
        "Max. Frame rate: 144.0 Hz\n" +
        "GPU: NVIDIA GeForce RTX 2050\n" +
        "CPU: Intel Core i5 13420H\n" +
        "Max frequency: 4600 MHz\n" +
        "RAM: 16 GB\n" +
        "Screen technology: IPS\n" +
        "Capacity: 512 GB",
    link:"https://kaspi.kz/shop/p/acer-nitro-5-anv15-51-nh-qnder-002-chernyi-116297801/?c=750000000",
    rating: 4,

  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/haf/h09/83360991117342.jpg?format=gallery-medium"],
    name:"Body Game Max Destroyer TGB Black",
    price:28475,
    description:"Form factor: mATX\n" +
        "Size: Midi-Tower\n" +
        "Power supply location: at the bottom\n" +
        "Body color: black",
    link:"https://kaspi.kz/shop/p/game-max-destroyer-tgb-chernyi-112989048/?c=750000000",
    rating: 1,

  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hb4/h23/64349610934302.jpg?format=gallery-medium"],
    name:"RAM G.SKILL F4-2666C19D-32GIS 32GB",
    price:32684,
    description:"Memory type: DDR4\n" +
        "Form factor: DIMM\n" +
        "Number of modules included: 2\n" +
        "Clock frequency: 2666 MHz",
    link:"https://kaspi.kz/shop/p/g-skill-f4-2666c19d-32gis-32-gb-106834211/?c=750000000",
    rating: 5,

  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/ha5/he6/80885842280478.jpg?format=gallery-medium"],
    name:"Motherboard ASRock A620M-HDV/M.2+",
    price:52625,
    description:"Form factor: microATX\n" +
        "Socket: AM5\n" +
        "Chipset: AMD A620\n" +
        "Memory type: DDR5 DIMM\n" +
        "Number of memory slots: 2\n"+
        "Number of SATA connectors: 4",
    link:"https://kaspi.kz/shop/p/asrock-a620m-hdv-m-2--110494934/?c=750000000",
    rating: 5,

  }
];

