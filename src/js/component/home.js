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
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-9 border border-secondary">
					<header className="border border-secondary">
						<img
							width="150px"
							src="https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logotipo.jpg"
						/>
					</header>
					{/* primero lo hacemos sencillito con 1 y luego lo componetisamos a ver si sale :D */}
					{/* aqui van los names de las canciones */}

					<div className="scrollMusic">
						{songList.map((element, i) => {
							return (
								<Cancion
									key={i}
									id={element.id}
									name={element.name}
									url={element.url}
								/>
							);
						})}
					</div>

					<div className="row justify-content-center text-center controlesbtns border border-secondary">
						<div className="col-8 mt-3">
							<audio
								src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
								controls
							/>
							{/* <input type="range" /> */}
						</div>
						<div className="col-8 mb-3">
							<button className="rounded-circle px-2 py-1 bg-dark text-white">
								<i className="fas fa-backward"></i>
							</button>
							<button className="rounded-circle px-2 py-1  mx-3">
								<i className="fas fa-play"></i>
							</button>
							<button className="rounded-circle px-2 py-1 bg-dark text-white ">
								<i className="fas fa-forward"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
