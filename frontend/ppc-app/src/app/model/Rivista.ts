import { RivistaPuzzle } from './rivistaPuzzle';

export interface Rivista {
    id: String,
    nRivista: String;
    data: Date;
    puzzles: Array<RivistaPuzzle>;
}
