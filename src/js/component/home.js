import React, { useRef, useEffect, useState } from "react";
import { Cancion } from "./canciones";
export function Home() {
	/* Categoria no te sirve para nada porque no lo vas a usar. */
	const [songList, setSongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 15,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 16,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 21,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 22,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

	/* cancion por defecto */
	const [cancionRepo, setCancionRepo] = useState(
		"https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
	);

	let audio = useRef();
	/* Quitar o poner pause */
	const pauseYplay = () => {
		/* si el video se encuentra pausado */
		if (audio.current.paused) {
			/* entonces dale play */
			audio.current.play();
			/* si el video no esta en pausa */
		} else if (!audio.current.paused) {
			/* entonces dale a pausa */
			audio.current.pause();
		}
	};

	/* Repetir cancion o no loop y check */
	const [ActivadoONO, setActivadoONO] = useState(false);
	const cambiarEstado = () => {
		let check = document.querySelector("#cbox1").checked;
		setActivadoONO(check);
	};

	/* Al hacer click */
	const cambiarCancion = cancionUrl => {
		let prefijo = "https://assets.breatheco.de/apis/sound/" + cancionUrl;
		setCancionRepo(prefijo);
	};

	/* Escuchando por defecto posicion */
	const [idescuchando, setIdescuchando] = useState(0);

	/* siguienteCancion */
	const siguienteCancion = () => {
		let cancionsiguiento = "https://assets.breatheco.de/apis/sound/";
		switch (idescuchando) {
			case 0:
				cancionsiguiento += songList[1].url;
				console.log("Posicion :1");
				break;
			case 1:
				cancionsiguiento += songList[2].url;
				console.log("Posicion :2");
				break;
			case 2:
				cancionsiguiento += songList[3].url;
				console.log("Posicion :3");
				break;
			case 3:
				cancionsiguiento += songList[4].url;
				console.log("Posicion :4");
				break;
			case 4:
				cancionsiguiento += songList[5].url;
				console.log("Posicion :5");
				break;
			case 5:
				cancionsiguiento += songList[6].url;
				console.log("Posicion :6");
				break;
			case 6:
				cancionsiguiento += songList[7].url;
				console.log("Posicion :7");
				break;
			case 7:
				cancionsiguiento += songList[8].url;
				console.log("Posicion :8");
				break;
			case 8:
				cancionsiguiento += songList[9].url;
				console.log("Posicion :9");
				break;
			case 9:
				cancionsiguiento += songList[10].url;
				console.log("Posicion :10");
				break;
			case 10:
				cancionsiguiento += songList[11].url;
				console.log("Posicion :11");
				break;
			case 11:
				cancionsiguiento += songList[12].url;
				console.log("Posicion :12");
				break;
			case 12:
				cancionsiguiento += songList[13].url;
				console.log("Posicion :13");
				break;
			case 13:
				cancionsiguiento += songList[14].url;
				console.log("Posicion :14");
				break;
			case 14:
				cancionsiguiento += songList[15].url;
				console.log("Posicion :15");
				break;
			case 15:
				cancionsiguiento += songList[16].url;
				console.log("Posicion :16");
				break;
			case 16:
				cancionsiguiento += songList[17].url;
				console.log("Posicion :17");
				break;
			case 17:
				cancionsiguiento += songList[18].url;
				console.log("Posicion :18");
				break;
			case 18:
				cancionsiguiento += songList[19].url;
				console.log("Posicion :19");
				break;
			case 19:
				cancionsiguiento += songList[20].url;
				console.log("Posicion :20");
				break;
			default:
				break;
		}
		if (idescuchando == 21) {
			console.log(idescuchando + "ALTO SOY YO");
		} else {
			setCancionRepo(cancionsiguiento);
			setIdescuchando(idescuchando + 1);
		}
		cancionsiguiento = "";
	};

	const antesCancion = () => {
		let cancionsiguiento = "https://assets.breatheco.de/apis/sound/";
		if (idescuchando - 1 == -1) {
			console.log("No podemos bajar de cancion");
		} else {
			switch (idescuchando) {
				case 1:
					cancionsiguiento += songList[0].url;
					console.log("Ultima, ya no podrias bajar mas");

					break;
				case 2:
					cancionsiguiento += songList[1].url;
					break;
				case 3:
					cancionsiguiento += songList[2].url;
					break;
				case 4:
					cancionsiguiento += songList[3].url;
					break;
				case 5:
					cancionsiguiento += songList[4].url;
					break;
				case 6:
					cancionsiguiento += songList[5].url;
					break;
				case 7:
					cancionsiguiento += songList[6].url;
					break;
				case 8:
					cancionsiguiento += songList[7].url;
					break;
				case 9:
					cancionsiguiento += songList[8].url;
					break;
				case 10:
					cancionsiguiento += songList[9].url;
					break;
				case 11:
					cancionsiguiento += songList[10].url;
					break;
				case 12:
					cancionsiguiento += songList[11].url;
					break;
				case 13:
					cancionsiguiento += songList[12].url;
					break;
				case 14:
					cancionsiguiento += songList[13].url;
					break;
				case 15:
					cancionsiguiento += songList[14].url;
					break;
				case 16:
					cancionsiguiento += songList[15].url;
					break;
				case 17:
					cancionsiguiento += songList[16].url;
					break;
				case 18:
					cancionsiguiento += songList[17].url;
					break;
				case 19:
					cancionsiguiento += songList[18].url;
					break;
				case 20:
					cancionsiguiento += songList[19].url;
					break;
				default:
					break;
			}

			setIdescuchando(idescuchando - 1);
			setCancionRepo(cancionsiguiento);
			cancionsiguiento = "";
		}
	};

	/* volumen */
	const sumarVol = () => {
		let volumenOriginal = document.querySelector("#audio");
		volumenOriginal.volume += 0.2;
	};
	const restarVol = () => {
		let volumenOriginal = document.querySelector("#audio");
		volumenOriginal.volume -= 0.2;
	};

	/* duracion del audio */
	const [duracionDelAudio, setDuracionDelAudio] = useState(0);
	/* pintamos la duracion de cada video */
	const verDuracion = () => {
		var duracion = document.querySelector("#audio");
		duracion.onloadeddata = function() {
			let minute = Math.floor(duracion.duration / 60);
			minute = minute < 10 ? "0" + minute : minute;
			var second = duracion.duration % 60;
			second = second < 10 ? "0" + second : second;
			setDuracionDelAudio(
				" " + Math.floor(minute) + ":" + Math.floor(second)
			);
		};
	};
	useEffect(() => {
		verDuracion();
	});

	/* tiempo transcurdio */
	const [tiempoTranscurrdioSlider, setTiempoTranscurrdioSlider] = useState(0);
	const [tiempoTranscurrdio, setTiempoTranscurrdio] = useState(0);
	const transcurrir = () => {
		var transsC = document.querySelector("#audio");
		/* si llegan a ser mas de 60 seg empieza a transformarlo */

		let minute = Math.floor(transsC.currentTime / 60);
		minute = minute < 10 ? "0" + minute : minute;
		var second = transsC.currentTime % 60;
		var second2 = transsC.currentTime;
		setTiempoTranscurrdioSlider(second);
		second = second < 10 ? "0" + second : second;
		setTiempoTranscurrdio(
			" " + Math.floor(minute) + ":" + Math.floor(second)
		);
	};

	/* para que vaya contando los segundos */
	setInterval(() => {
		transcurrir();
	}, 1000);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-9 border border-secondary">
					<header className="border-bottom border-secondary px-2">
						<img
							width="150px"
							src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg"
						/>
					</header>
					<div className="scrollMusic">
						{/* Canciones */}
						{songList.map((element, i) => {
							return (
								<Cancion
									key={i}
									id={element.id}
									name={element.name}
									url={element.url}
									cambiarCancion={cambiarCancion}
									setIdescuchando={setIdescuchando}
								/>
							);
						})}
					</div>

					<div className="row justify-content-center text-center controlesbtns border border-secondary">
						<div className="col-8 mt-3">
							<audio
								id="audio"
								ref={audio}
								src={cancionRepo}
								controls
								autoPlay
								loop={ActivadoONO}
								/* Antes verificamos con una condicional si
                                 el chek esta desconectado sino volvemos a repro */
								onEnded={siguienteCancion}
							/>
							<input
								type="range"
								value={tiempoTranscurrdioSlider}
								max={duracionDelAudio}
							/>
						</div>
						<div className="col-12">
							<p className="h4 text-white">
								{idescuchando + 1} -
								{" " + songList[idescuchando].name} -
								{tiempoTranscurrdio}-{duracionDelAudio}
							</p>
						</div>
						{/* botones atras play siguiente */}

						<div className="col-3"></div>
						<div className="col-6 mb-3">
							<button
								onClick={antesCancion}
								className="rounded-circle px-2 py-1 bg-dark text-white">
								<i className="fas fa-backward"></i>
							</button>
							<button
								onClick={pauseYplay}
								className="rounded-circle px-2 py-1  mx-3">
								<i className="fas fa-play"></i>
							</button>
							<button
								onClick={siguienteCancion}
								className="rounded-circle px-2 py-1 bg-dark text-white ">
								<i className="fas fa-forward"></i>
							</button>
						</div>
						<div className="col-3 text-center">
							<input
								type="checkbox"
								id="cbox1"
								value="first_checkbox"
								onClick={cambiarEstado}
							/>{" "}
							Repetir
							<button
								onClick={sumarVol}
								className="rounded-circle px-2 py-1 bg-dark text-white ml-4 mr-2 ">
								<i className="fas fa-volume-up"></i>
							</button>
							<button
								onClick={restarVol}
								className="rounded-circle px-2 py-1 bg-dark text-white ">
								<i className="fas fa-volume-down"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
