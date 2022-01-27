const validAnswersDict = {
  ABA: 'CUS',
  ABO: 'ARDUND',
  ABS: 'ENTORBURD',
  ACC: 'ENTESSORD',
  ACR: 'OSS',
  ACT: 'IONIVEUAL',
  ADM: 'IRE',
  ADV: 'ENTICE',
  AER: 'IAL',
  AFF: 'ECT',
  AFL: 'OAT',
  AFR: 'AID',
  AIR: 'BUS',
  ALL: 'IED',
  ALW: 'AYS',
  ANA: 'LOG',
  ANC: 'HOR',
  ANE: 'MIA',
  ANN: 'UAL',
  ANT: 'ICS',
  ANY: 'ONE',
  APA: 'CHETHY',
  API: 'ECE',
  APP: 'LES',
  ARC: 'ADEHER',
  ARD: 'ENT',
  ARM: 'OUR',
  ART: 'ERYIST',
  ASC: 'ENDENT',
  ASP: 'ECT',
  ASS: 'ERTIGNUME',
  ASY: 'LUM',
  ATT: 'ACHAIN',
  AUB: 'URN',
  AUT: 'UMN',
  AVE: 'NUE',
  BAI: 'LEY',
  BAN: 'KER',
  BAR: 'BERELYROW',
  BAS: 'KET',
  BAT: 'TER',
  BEA: 'TENUTYVER',
  BEC: 'OME',
  BEF: 'ORE',
  BEH: 'IND',
  BEL: 'ONG',
  BEN: 'DERIGN',
  BEW: 'ARE',
  BIL: 'GES',
  BIN: 'DERGES',
  BIS: 'HOP',
  BIT: 'INGTENTER',
  BLA: 'MED',
  BLO: 'ODY',
  BOI: 'LEDLER',
  BOM: 'BED',
  BOR: 'DER',
  BOT: 'HERTOM',
  BOU: 'NCE',
  BRA: 'NDY',
  BRE: 'ACHASTEZE',
  BRI: 'GHT',
  BUB: 'BLE',
  BUD: 'GET',
  BUF: 'FET',
  BUM: 'PER',
  BUR: 'DENEAU',
  BUT: 'LERTERTON',
  BYP: 'ASS',
  CAB: 'LES',
  CAE: 'SAR',
  CAM: 'ERA',
  CAN: 'CELNON',
  CAR: 'BONEERPET',
  CAS: 'INOTLEUAL',
  CAU: 'GHT',
  CAV: 'ITY',
  CEL: 'ERY',
  CEN: 'TER',
  CER: 'EAL',
  CHA: 'NCE',
  CHE: 'ERS',
  CHO: 'OSESEN',
  CLE: 'RGYVER',
  CLI: 'MAXNIC',
  CLU: 'TCH',
  COA: 'RSE',
  COF: 'FEEFIN',
  COH: 'ORT',
  COL: 'UMN',
  COM: 'BATEDY',
  COO: 'LERPER',
  COR: 'PUS',
  COS: 'TLY',
  COT: 'TON',
  COU: 'PLESIN',
  COV: 'ERS',
  COW: 'BOY',
  CRI: 'TIC',
  CRU: 'ISENCH',
  DAG: 'GER',
  DAL: 'TON',
  DAM: 'AGENEDPEN',
  DAN: 'GER',
  DEA: 'DLY',
  DEB: 'ATE',
  DEC: 'ADEIDEKER',
  DED: 'UCEUCT',
  DEE: 'PEN',
  DEF: 'EATECT',
  DEG: 'REE',
  DEL: 'ISTUGEUXE',
  DEM: 'ISE',
  DEN: 'IAL',
  DEP: 'ARTENDICT',
  DES: 'IRE',
  DET: 'AILOUR',
  DEV: 'ICEISEOID',
  DIF: 'FER',
  DIS: 'MAYPEL',
  DIV: 'ESTIDEINE',
  DOC: 'TOR',
  DOG: 'GED',
  DOL: 'LAR',
  DOM: 'AIN',
  DON: 'ATEKEY',
  DOR: 'SAL',
  DOS: 'AGE',
  DOU: 'BLY',
  DRA: 'GONPERWER',
  DRE: 'ARY',
  DUG: 'OUT',
  DUR: 'ING',
  EAR: 'THY',
  EAT: 'ERYING',
  EDG: 'ING',
  EDI: 'BLETOR',
  EFF: 'IGY',
  EGO: 'ISM',
  EIG: 'HTY',
  EIT: 'HER',
  ELA: 'PSETED',
  ELD: 'EST',
  ELE: 'VEN',
  ELI: 'CIT',
  EME: 'RGE',
  ENA: 'MEL',
  END: 'EARURE',
  ENE: 'RGY',
  ENG: 'INEULF',
  ENI: 'GMA',
  ENJ: 'OIN',
  ENL: 'IST',
  ENS: 'URE',
  ENT: 'IREREE',
  ENZ: 'YME',
  EQU: 'ATEITY',
  ERO: 'TIC',
  ERR: 'AND',
  ESC: 'APEROW',
  EUL: 'OGY',
  EVO: 'LVE',
  EXC: 'ITE',
  EXO: 'DUS',
  EXP: 'ANDECTERTORT',
  EXT: 'ORT',
  FAC: 'ING',
  FAD: 'ING',
  FAI: 'RLY',
  FAL: 'LEN',
  FAT: 'HOM',
  FAU: 'LTY',
  FAV: 'OUR',
  FEL: 'INELOW',
  FEM: 'ALE',
  FEN: 'DER',
  FEU: 'DAL',
  FIA: 'SCO',
  FID: 'DLE',
  FIE: 'RCE',
  FIL: 'INGLER',
  FIN: 'ELYISH',
  FIS: 'CAL',
  FLA: 'VOR',
  FLI: 'MSY',
  FLO: 'PPYRALWER',
  FLY: 'ING',
  FOL: 'LOW',
  FOR: 'AGEBIDCEDESTMAL',
  FOS: 'TER',
  FOU: 'GHT',
  FRE: 'EZENCHNZYSCO',
  FRI: 'DGEGHT',
  FUL: 'LER',
  FUM: 'BLE',
  FUN: 'GALGUSNEL',
  GAB: 'LES',
  GAD: 'GET',
  GAL: 'LEYLON',
  GAM: 'BLEING',
  GAN: 'TRY',
  GAP: 'ING',
  GAR: 'AGEDENISHNERTER',
  GAT: 'HER',
  GEN: 'DERIUSTRY',
  GER: 'MAN',
  GET: 'TER',
  GHE: 'TTO',
  GIB: 'BON',
  GIG: 'GLE',
  GLA: 'NCE',
  GLI: 'DER',
  GLO: 'BALOMYSSYVER',
  GLU: 'TEN',
  GOB: 'LET',
  GOV: 'ERN',
  GRA: 'DERVEL',
  GRE: 'ASEEDY',
  GRI: 'SLY',
  GRO: 'OVEUNDWTH',
  GRU: 'BBYMPYNGE',
  GUI: 'LTYNEA',
  GUN: 'MAN',
  GUR: 'NEY',
  HAC: 'KER',
  HAI: 'RED',
  HAM: 'PER',
  HAN: 'DEDGARGED',
  HAR: 'DENDLY',
  HAS: 'SLE',
  HAT: 'RED',
  HEA: 'DEDLERRTHRTYVEN',
  HEC: 'TOR',
  HEI: 'FER',
  HEL: 'IUMPER',
  HER: 'EINEOFPES',
  HIC: 'CUPKEY',
  HID: 'DEN',
  HIN: 'DER',
  HIP: 'PIE',
  HOA: 'RSE',
  HOC: 'KEY',
  HOL: 'DEN',
  HOM: 'AGE',
  HOO: 'KEDPERRAYVES',
  HOR: 'NEDRIDROR',
  HOT: 'BED',
  HOU: 'RLY',
  HUD: 'DLE',
  HUM: 'ANEMER',
  HUN: 'GERGRYTER',
  HUR: 'LEY',
  HYB: 'RID',
  ICE: 'BOX',
  ICO: 'NIC',
  IGN: 'ORE',
  IGU: 'ANA',
  IMB: 'IBE',
  IMP: 'ACTAIREDEISHOSEURE',
  INB: 'RED',
  INC: 'ENTISEITE',
  IND: 'EEDENTICTOOR',
  INF: 'AMYANTILLLOWLUXORM',
  INJ: 'URY',
  INL: 'AND',
  INM: 'ATE',
  INR: 'OADUSH',
  INS: 'ANEECTIDETEPULTURE',
  INT: 'ENDERNONERON',
  INU: 'LIN',
  INV: 'ADEESTITEOKE',
  IOD: 'IDEINE',
  IRO: 'NIC',
  ISO: 'MER',
  ITS: 'ELF',
  JAC: 'KALKET',
  JAG: 'UAR',
  JAI: 'LER',
  JAN: 'GLE',
  JAR: 'GON',
  JES: 'TER',
  JET: 'SAM',
  JIB: 'BER',
  JIG: 'GLEGLY',
  JIN: 'GLEGLYNIS',
  JIT: 'TER',
  JOC: 'KEY',
  JOH: 'NNY',
  JOI: 'NER',
  JOS: 'EPHTLE',
  JOY: 'FULOUS',
  JUG: 'GLE',
  JUI: 'CEDCER',
  JUM: 'PER',
  JUN: 'KERKETKIE',
  KAB: 'AKA',
  KAR: 'ATE',
  KEY: 'PAL',
  KIC: 'KER',
  KIL: 'LED',
  KIM: 'CHI',
  KIN: 'ASE',
  KIT: 'TENTLE',
  KNI: 'GHT',
  KNO: 'TTY',
  KOS: 'HER',
  KRA: 'KENTER',
  LAD: 'ING',
  LAG: 'OON',
  LAM: 'BDAENT',
  LAN: 'DER',
  LAP: 'SEDTOP',
  LAR: 'DERYNX',
  LAT: 'ENTEST',
  LAW: 'YER',
  LAY: 'MAN',
  LEA: 'DENVES',
  LEG: 'ACYGEDION',
  LES: 'SEN',
  LET: 'HALTER',
  LIA: 'BLE',
  LIG: 'HTS',
  LIK: 'ING',
  LIN: 'EARGERINGKED',
  LIQ: 'UIDUOR',
  LIS: 'TEN',
  LIT: 'MUSTLE',
  LIV: 'ING',
  LIZ: 'ARD',
  LOA: 'DERTHE',
  LOC: 'ALEKERUST',
  LOO: 'KUPSEN',
  LOS: 'ING',
  LOU: 'NGE',
  LOV: 'ELYING',
  LUM: 'BARBER',
  LUS: 'TERTRE',
  MAI: 'DEN',
  MAK: 'EUP',
  MAN: 'AGETLEUALURE',
  MAR: 'BLEINAKEDKERROWTINTYRVEL',
  MAS: 'TER',
  MEA: 'DOW',
  MED: 'IANLEY',
  MEL: 'ODY',
  MEM: 'BER',
  MEN: 'ACETALTOR',
  MER: 'CER',
  MIC: 'KEY',
  MID: 'CAPDAYDLEWAY',
  MIN: 'UTE',
  MIR: 'AGE',
  MOB: 'ILE',
  MOD: 'IFYULE',
  MOM: 'ENT',
  MON: 'KEY',
  MOR: 'RISROWTALTAR',
  MOS: 'TLY',
  MOT: 'HER',
  MOV: 'ING',
  MUR: 'DER',
  MUS: 'CLEEUMTER',
  MUT: 'ANT',
  MYS: 'TIC',
  NAR: 'ROW',
  NAT: 'IVERON',
  NEA: 'RBY',
  NEB: 'ULA',
  NEC: 'KED',
  NEP: 'HEW',
  NES: 'TLE',
  NET: 'HER',
  NEU: 'RONTER',
  NEW: 'BIEISH',
  NIG: 'HTS',
  NIP: 'PER',
  NIT: 'RIC',
  NOO: 'DLE',
  NOR: 'MAL',
  NOS: 'ING',
  NOT: 'ARYATE',
  NOU: 'GAT',
  NOV: 'ICE',
  NOZ: 'ZLE',
  NUB: 'ILE',
  NUG: 'GET',
  NUT: 'RIA',
  NUZ: 'ZLE',
  OBL: 'IGEONG',
  OBT: 'AINUSE',
  OCC: 'UPY',
  OCE: 'LOT',
  OCT: 'ANE',
  ODD: 'ITY',
  OFF: 'END',
  ONL: 'INE',
  ONW: 'ARD',
  OOD: 'LES',
  OPA: 'QUE',
  OPE: 'NER',
  OPI: 'OID',
  OPP: 'OSE',
  ORA: 'CLENGETOR',
  ORD: 'AIN',
  ORN: 'ATEERY',
  OSP: 'REY',
  OUT: 'AGEDIDFOXINGPUTWIT',
  OVE: 'RDO',
  OXF: 'ORD',
  OXY: 'GEN',
  OYS: 'TER',
  PAG: 'ING',
  PAL: 'ACE',
  PAR: 'ADEDONENTISHITYTLY',
  PAS: 'TOR',
  PAT: 'ROLTEN',
  PAY: 'OUT',
  PEA: 'KED',
  PEN: 'CIL',
  PEO: 'PLE',
  PEP: 'PER',
  PER: 'IOD',
  PET: 'ROL',
  PIA: 'ZZA',
  PIE: 'RCE',
  PIS: 'TOL',
  PLA: 'GUENESYER',
  PLE: 'ASE',
  POC: 'KET',
  POE: 'TICTRY',
  POL: 'ICYISHITE',
  PON: 'DER',
  POR: 'TAL',
  POS: 'TAL',
  POT: 'ATO',
  POW: 'DER',
  PRA: 'YER',
  PRE: 'ACH',
  PRI: 'ESTMER',
  PRO: 'FITMPTTONVEN',
  PUB: 'LIC',
  PUN: 'ISH',
  PUR: 'PLESUE',
  QUA: 'CKYLMSRTS',
  QUE: 'ENSERSLLSNCHUEDUES',
  QUI: 'ETSNOANTSRKSRKYRTSVER',
  QUO: 'RUMTASTED',
  RAB: 'BIT',
  RAC: 'IAL',
  RAD: 'IAL',
  RAR: 'ELY',
  RAT: 'HER',
  REA: 'SON',
  REC: 'ENTIPEKONORD',
  REF: 'INEORM',
  REG: 'RET',
  REJ: 'ECT',
  REL: 'ATE',
  REM: 'ARKEDYINDOTE',
  REO: 'PEN',
  REP: 'AIREATORT',
  RES: 'ALECUEIDEISTORTUME',
  RET: 'URN',
  REV: 'IEWISEIVEOLT',
  RHY: 'THM',
  RIC: 'HES',
  RID: 'LEY',
  RIS: 'ING',
  ROB: 'UST',
  ROC: 'KET',
  ROL: 'LER',
  ROO: 'KIE',
  ROS: 'TER',
  ROT: 'ATE',
  RUB: 'BLE',
  RUG: 'GED',
  RUL: 'ING',
  SAC: 'RED',
  SAL: 'ARY',
  SCA: 'RCE',
  SCH: 'OOL',
  SCR: 'EEN',
  SEA: 'RCHSON',
  SEC: 'ONDRETURE',
  SEE: 'ING',
  SEL: 'DOMLER',
  SEN: 'DER',
  SEV: 'ERE',
  SHI: 'ELD',
  SHO: 'ULDWER',
  SIE: 'RRA',
  SIG: 'NALNED',
  SIL: 'VER',
  SIM: 'PLE',
  SIN: 'GERGLE',
  SIS: 'TER',
  SLI: 'GHT',
  SOD: 'IUM',
  SOO: 'NER',
  SOU: 'NDS',
  SOV: 'IET',
  SPE: 'ECH',
  SPO: 'KENUSE',
  SPR: 'INGINT',
  SQU: 'ARE',
  STA: 'NCETUS',
  STE: 'REO',
  STR: 'EAKEETIKEIPSIVEUCK',
  STU: 'PID',
  SUB: 'TLE',
  SUD: 'DEN',
  SUM: 'MER',
  SUN: 'SET',
  SUP: 'ERBPLY',
  SUR: 'ELYVEY',
  SWI: 'TCH',
  SYM: 'BOL',
  SYS: 'TEM',
  TAB: 'LESLET',
  TAC: 'KLE',
  TAI: 'LOR',
  TAN: 'GLEKER',
  TAR: 'GETIFF',
  TAV: 'ERN',
  TEL: 'LER',
  TEN: 'ANTDERURE',
  TES: 'TER',
  THA: 'NKS',
  THE: 'IRSORY',
  THO: 'RNY',
  THR: 'EADIVEONE',
  TIC: 'KET',
  TIM: 'BERELYING',
  TOI: 'LET',
  TOM: 'ATO',
  TOR: 'QUE',
  TOU: 'CHE',
  TOW: 'ARD',
  TRA: 'DERGICINSNCEUMA',
  TRE: 'BLENCHNDY',
  TRI: 'BALCKYVIA',
  TRO: 'PHYUGHUPE',
  TRY: 'OUT',
  TUM: 'BLE',
  TUN: 'DRA',
  TUR: 'KEYNER',
  TUX: 'EDO',
  TWE: 'LVENTY',
  ULT: 'IMA',
  UNB: 'ORN',
  UNC: 'LOGOOL',
  UND: 'EADIESONE',
  UNE: 'ASY',
  UNF: 'AIROLD',
  UNH: 'OLYOOKURT',
  UNI: 'QUESONTED',
  UNL: 'ESSOCK',
  UNM: 'AKEASK',
  UNP: 'ACKAID',
  UNS: 'AFEEATEENOLDURE',
  UNT: 'IDYOLD',
  UNU: 'SED',
  UNW: 'ARY',
  UPB: 'EAT',
  UPH: 'ILL',
  UPL: 'ANDINKOAD',
  UPP: 'ITY',
  UPR: 'OOT',
  UPS: 'IDE',
  UPT: 'AKEICKOWN',
  UPW: 'ARDIND',
  USA: 'BLE',
  USE: 'FUL',
  UTO: 'PIA',
  VAG: 'ARY',
  VAL: 'ISELEY',
  VAN: 'ITY',
  VAP: 'OUR',
  VAR: 'IED',
  VEG: 'GIE',
  VEI: 'NED',
  VEN: 'DOREEROUSTER',
  VER: 'GERIFYMINNALTEX',
  VES: 'PER',
  VIG: 'OUR',
  VIL: 'IFY',
  VIO: 'LIN',
  VIS: 'ION',
  VIT: 'ALS',
  VOI: 'CEDDED',
  VOL: 'LEYUME',
  VOO: 'DOO',
  VOR: 'TEX',
  VUL: 'GAR',
  WAD: 'DLE',
  WAF: 'FLE',
  WAI: 'TERVER',
  WAL: 'KERLOPLOWRUS',
  WAN: 'TON',
  WAR: 'REN',
  WAS: 'HER',
  WEA: 'KENPON',
  WEB: 'BEDCAM',
  WED: 'DED',
  WEE: 'KLY',
  WEI: 'GHTRDO',
  WEL: 'DER',
  WET: 'TER',
  WHI: 'TEN',
  WHO: 'LLY',
  WIC: 'KED',
  WIL: 'DER',
  WIN: 'DOWNERTER',
  WIR: 'ING',
  WIS: 'DOM',
  WIT: 'HIN',
  WOB: 'BLE',
  WOE: 'FUL',
  WOO: 'DSYFERLENLLY',
  WOR: 'KERSEN',
  WRA: 'ITH',
  WRI: 'GHT',
  YAC: 'HTS',
  YAM: 'ENS',
  YAN: 'KED',
  YAW: 'NED',
  YEA: 'RLYRNS',
  YEL: 'LERPEDPER',
  YIE: 'LDS',
  YIP: 'PEE',
  YON: 'DER',
  YUP: 'PIE',
  ZAP: 'PER',
  ZEA: 'LOT',
  ZEB: 'RAS',
  ZER: 'OES',
  ZES: 'TED',
  ZIG: 'GEDZAG',
  ZIN: 'GEDGER',
  ZIT: 'HER',
  ZIZ: 'ZED',
  ZOD: 'IAC',
  ZYG: 'OTE',
  ZYM: 'OSE'
}

const validAnswers = []

for (const [key, value] of Object.entries(validAnswersDict)) {
  for(let i = 0; i < value.length; i += 3) {
    validAnswers.push(key + value.substring(i, i + 3))
  }
}

export default validAnswers