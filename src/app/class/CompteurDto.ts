import {MotifCompteurDto} from './MotifCompteurDto';
export class CompteurDto {

  idCompteur: number;
  idAgent: number;
  dureeAAjouter: number;
  dureeARetrancher: number;
  motifCompteurDto: MotifCompteurDto;
  isAnneePrecedente = false;
  isRetrait = true;
  dateDebut: Date;
  dateFin: Date;

  constructor() {}
}
