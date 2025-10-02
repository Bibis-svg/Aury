import colecaoGeekImg from "/src/assets/image/colecao-geek.png";
import boneImg from "/src/assets/image/bone.png";
import cameraImg from "/src/assets/image/camera.png";
import bolaImg from "/src/assets/image/bola.png";
import raqueteImg from "/src/assets/image/raquete.png";
import vinilBeatlesImg from "/src/assets/image/vinil-beatles.png";
import tenisImg from "/src/assets/image/tenis.png";
import guitarraImg from "/src/assets/image/guitarra.png";
import camisetaImg from "/src/assets/image/camiseta.png";
import relogioImg from "/src/assets/image/relogio.png";
import vinilGagaImg from "/src/assets/image/vinil-gaga.png";
import snoopyImg from "/src/assets/image/snoopy.png";

export const products = [
    { 
        id: "geek", 
        name: "Coleção GEEK", 
        price: "R$ 250", 
        imageSrc: colecaoGeekImg, 
        isFeatured: true, 
        bgColor: "#A8A6DA",
        subtitle: "Coleção completa de quadrinhos", 
        description: "O cheiro de papel antigo e a nostalgia de heróis que definiram gerações. Esta coleção pertenceu a um fã que, por anos, caçou cada edição como um tesouro. Agora, a aventura pode ser sua." 
    },
    { 
        id: 1, 
        name: "Boné infantil", 
        price: "R$ 15", 
        imageSrc: boneImg, 
        bgColor: "#B2B0D8",
        description: "Marcado pelo sol de muitas tardes no parque e por algumas manchas de sorvete. Este boné foi o fiel escudeiro de um pequeno aventureiro que hoje já não precisa mais dele."
    },
    { 
        id: 2, 
        name: "Câmera vintage", 
        price: "R$ 30", 
        imageSrc: cameraImg, 
        bgColor: "#8C88DC",
        description: "Ela capturou momentos que nunca foram parar nas redes sociais, apenas em álbuns de família. Cada clique do obturador é um eco de sorrisos e memórias que o tempo guardou."
    },
    { 
        id: 3, 
        name: "Bola antiga", 
        price: "R$ 35", 
        imageSrc: bolaImg, 
        bgColor: "#D1CDE5",
        description: "Os arranhões em seu couro contam histórias de jogos de rua, gols improvisados e da alegria simples de uma tarde com amigos. Ela não é perfeita, mas é real."
    },
    { 
        id: 4, 
        name: "Raquete de tênis", 
        price: "R$ 35", 
        imageSrc: raqueteImg, 
        bgColor: "#A8A7D9",
        description: "Apoiada em um canto por anos, esta raquete sonha com o som da bola e a emoção de uma partida. Pertenceu a alguém que um dia sonhou em ser um campeão."
    },
    { 
        id: 5, 
        name: "Vinil Beatles", 
        price: "R$ 80", 
        imageSrc: vinilBeatlesImg, 
        bgColor: "#9D9BDA",
        description: "Mais do que música, é um portal para outra era. O chiado suave da agulha no disco é parte da canção, uma trilha sonora para a nostalgia que só os clássicos podem trazer."
    },
    { 
        id: 6, 
        name: "Tênis 39/40", 
        price: "R$ 95", 
        imageSrc: tenisImg, 
        bgColor: "#CCCCD8",
        description: "Estes tênis já caminharam por muitas ruas e dançaram em muitas festas. Guardam em suas solas os ecos dos passos de alguém que viveu intensamente cada momento."
    },
    { 
        id: 7, 
        name: "Guitarra Fender", 
        price: "R$ 150", 
        imageSrc: guitarraImg, 
        isLarge: true, 
        bgColor: "#8C88DC",
        description: "Cada marca em sua madeira é um acorde tocado com alma. Foi o instrumento de um músico de garagem que sonhava com os palcos, deixando um pouco de seu sonho em cada nota.",
        model3d_url: "https://huggingface.co/datasets/Jezapi/aury/resolve/main/guitar.glb" 

    },
    { 
        id: 8, 
        name: "Camiseta banda vintage", 
        price: "R$ 40", 
        imageSrc: camisetaImg, 
        bgColor: "#B2B0D8",
        description: "Uma relíquia de um show inesquecível. O tecido um pouco desbotado não diminui seu valor, pelo contrário: mostra que ela foi a armadura de um verdadeiro fã em um dia lendário."
    },
    { 
        id: 9, 
        name: "Relógio", 
        price: "R$ 200", 
        imageSrc: relogioImg, 
        bgColor: "#8C88DC",
        description: "Este relógio não marca apenas as horas; ele guarda o tempo que pertenceu a outra pessoa. Um presente de formatura, uma herança de família, agora pronto para marcar novos momentos.",
        model3d_url: "https://huggingface.co/datasets/Jezapi/aury/resolve/main/alarm_clock.glb" 

    },

    { 
        id: 10, 
        name: "Vinil Lady Gaga", 
        price: "R$ 190", 
        imageSrc: vinilGagaImg, 
        bgColor: "#D1CDE5",
        description: "Um clássico moderno. Prova de que algumas memórias icônicas não precisam de décadas para se tornarem vintage. Apenas da intensidade de uma geração que se expressou sem medo."
    },
    { 
        id: 11, 
        name: "Pelúcia Snoopy", 
        price: "R$ 100", 
        imageSrc: snoopyImg, 
        bgColor: "#9D9BDA",
        description: "O Snoopy era a pelúcia favorita de Jeni, uma menininha de 9 anos que dormia todo dia abraçada com ele. Hoje Jeni está na faculdade e o Snoopy precisa de outro dono para abraçá-lo.",
        model3d_url: "https://huggingface.co/datasets/Jezapi/aury/resolve/main/snoopy.glb" 
    },
];