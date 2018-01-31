import {MotifCompteurDto} from './MotifCompteurDto';
export class CompteurDto {

  idCompteur: number;
  idAgent: number;
  dureeAAjouter: number;
  dureeARetrancher: number;
  motifCompteurDto: MotifCompteurDto = new MotifCompteurDto();
  anneePrecedente : boolean;
  isRetrait = false;
  dateDebut: Date;
  dateFin: Date;


  constructor() {}
}
