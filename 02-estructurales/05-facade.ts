/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */
import {COLORS} from "../helpers/colors.ts";


class Projector {
  turnOn() {
    console.log("projector on");
  }

  turnOff(){
    console.log("projector off");
  }



}

class SoundSystem {
  on() {
    console.log("sound system on");
  }

  off() {
    console.log("sound off");
  }
}

class VideoPlayer {

  on() {
    console.log("video player on");
  }

  play(movie: string) {
    console.log(`playing %c${movie}`, COLORS.blue);
  }

  stop() {
    console.log("stopped system on");
  }

  off() {
    console.log("video player off");
  }

}

class PopcornMaker {
  poppingPopcorn() {
    console.log("popping popcorn");
  }

  turnOffPoppingPopcorn() {
    console.log("stopped popcorn");
  }
}

interface HomeTheaterFacadeOptions {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  constructor({
    projector,
    popcornMaker,
    videoPlayer,
    soundSystem
  }: HomeTheaterFacadeOptions) {
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcornMaker = popcornMaker;
  }

  watchMovie(movie: string) {
    console.log("%cPreparing movie", COLORS.blue);
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcornMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);

    console.log("%cEnjoy the movie!", COLORS.blue);

  }

  endWatchingMovie() {
    console.log("%c\n\nPreparing to stop movie", COLORS.blue);
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcornMaker.turnOffPoppingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off();

    console.log("%c\nShutdown system!", COLORS.blue);

  }

}

function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
  const popcornMaker = new PopcornMaker();

  const homeTheater = new HomeTheaterFacade({
    soundSystem,
    videoPlayer,
    popcornMaker,
    projector
  });


  homeTheater.watchMovie('The Avengers');

  homeTheater.endWatchingMovie();
}

main();
