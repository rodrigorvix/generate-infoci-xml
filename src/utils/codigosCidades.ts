
const codigosCidades = [
  {cod:"", label:""},
  {cod:"500E0100019", label:"500E0100019 - AGERH"},
  {cod:"500E2200001" , label:"500E2200001 - APEES"},
  {cod:"500E0100011", label:"500E0100011 - ARSP1"},
  {cod:"500E0100028", label:"500E0100028 - ARSP2"},
  {cod:"500E2300003", label:"500E2300003 - CBMES"},
  {cod:"500E2300005", label:"500E2300005 - CEPDEC"},
  {cod:"500E0500023", label:"500E0500023 - FUNREBOM"},
  {cod:"500E0500024", label:"500E0500024 - FUNPDEC"},
  {cod:"500E0100014", label:"500E0100014 - DER-ES"},
  {cod:"500E0500011", label:"500E0500011 - FEP"},
  {cod:"500E0100022", label:"500E0100022 - DETRAN-ES"},
  {cod:"500E0100005", label:"500E0100005 - DIO"},
  {cod:"500E2300004", label:"500E2300004 - DSPM"},
  {cod:"500E0100004", label:"500E0100004 - ESESP"},
  {cod:"500E0100020", label:"500E0100020 - FAMES"},
  {cod:"500E0400001", label:"500E0400001 - FAPES"},
  {cod:"500E0500009", label:"500E0500009 - FUNCITEC"},
  {cod:"500E0100012", label:"500E0100012 - IDAF"},
  {cod:"500E0100018", label:"500E0100018 - IEMA"},
  {cod:"500E0100003", label:"500E0100003 - IJSN"},
  {cod:"500E0500004", label:"500E0500004 - FUMDEVIT"},
  {cod:"500E0100013", label:"500E0100013 - INCAPER"},
  {cod:"500E0800001", label:"500E0800001 - IPAJM"},
  {cod:"500E0900001", label:"500E0900001 - FUNDO FINANCEIRO"},
  {cod:"500E0900002", label:"500E0900002 - FUNDO PREVIDENCIÁRIO"},
  {cod:"500E2900001", label:"500E2900001 - FPS"},
  {cod:"500E0100008", label:"500E0100008 - IPEM-ES1"},
  {cod:"500E0100027", label:"500E0100027 - IPEM-ES2"},
  {cod:"500E0100002", label:"500E0100002 - JUCEES"},
  {cod:"500E2300001", label:"500E2300001 - PCES"},
  {cod:"500E0500020", label:"500E0500020 - FUNREPOCI"},
  {cod:"500E0600008", label:"500E0600008 - PGE"},
  {cod:"500E0500001", label:"500E0500001 - FUNCAD"},
  {cod:"500E2300002", label:"500E2300002 - PMES"},
  {cod:"500E0500021", label:"500E0500021 - FUNREPOM"},
  {cod:"500E0100024", label:"500E0100024 - PROCON-ES"},
  {cod:"500E0500027", label:"500E0500027 - FEDC"},
  {cod:"500E0100006", label:"500E0100006 - PRODEST"},
  {cod:"500E0100001", label:"500E0100001 - RTV"},
  {cod:"500E0600004", label:"500E0600004 - CASA MILITAR"},
  {cod:"500E0600012", label:"500E0600012 - SEAG"},
  {cod:"500E0500006", label:"500E0500006 - FEAC"},
  {cod:"500E0500007", label:"500E0500007 - FUNSAF"},
  {cod:"500E0500008", label:"500E0500008 - FEAP"},
  {cod:"500E0500039", label:"500E0500039 - FEACME"},
  {cod:"500E0600019", label:"500E0600019 - SEAMA"},
  {cod:"500E0500016", label:"500E0500016 - FUNDEMA"},
  {cod:"500E0500017", label:"500E0500017 - FUNDAGUA"},
  {cod:"500E0600006", label:"500E0600006 - SECOM"},
  {cod:"500E0600005", label:"500E0600005 - SECONT"},
  {cod:"500E0500035", label:"500E0500035 - FECC"},
  {cod:"500E0600011", label:"500E0600011 - SEDES"},
  {cod:"500E0600013", label:"500E0600013 - SECTIDES"},
  {cod:"500E0500010", label:"500E0500010 - FDI"},
  {cod:"500E0600018", label:"500E0600018 - SECULT"},
  {cod:"500E0500015", label:"500E0500015 - FUNCULTURA"},
  {cod:"500E0600025", label:"500E0600025 - SEDH"},
  {cod:"500E0500038", label:"500E0500038 - FESAD"},
  {cod:"500E0500033", label:"500E0500033 - FIA"},
  {cod:"500E0500034", label:"500E0500034 - FEPI"},
  {cod:"500E0600020", label:"500E0600020 - SEDU"},
  {cod:"500E0500018", label:"500E0500018 - FUNDEB"},
  {cod:"500E0500040", label:"500E0500040 - PAES"},
  {cod:"500E0600015", label:"500E0600015 - SEDURB"},
  {cod:"500E0500012", label:"500E0500012 - FEHAB"},
  {cod:"500E0600001", label:"500E0600001 - SEFAZ"},
  {cod:"500E0500003", label:"500E0500003 - FUNSEFAZ"},
  {cod:"500E0600002", label:"500E0600002 - SEGER"},
  {cod:"500E2100001", label:"500E2100001 - ENCARGOS GERAIS – SEGER"},
  {cod:"500E0500042", label:"500E0500042 - FUNSES"},
  {cod:"500E0500045", label:"500E0500045 - FUNDO RECONSTRUÇÃO ES"},
  {cod:"500E0500047", label:"500E0500047 - FUNPE"},
  {cod:"500E0500048", label:"500E0500048 - FAR"},
  {cod:"500E2100002", label:"500E2100002 - ENCARGOS GERAIS – SEFAZ"},
  {cod:"500E0600007", label:"500E0600007 - SEG"},
  {cod:"500E0600023", label:"500E0600023 - SEJUS"},
  {cod:"500E0500025", label:"500E0500025 - FRSP"},
  {cod:"500E0500026", label:"500E0500026 - FUNPEN"},
  {cod:"500E0600014", label:"500E0600014 - SEMOBI"},
  {cod:"500E0500041", label:"500E0500041 - FEFIN"},
  {cod:"500E0600010", label:"500E0600010 - SEP"},
  {cod:"500E0500005", label:"500E0500005 - FEADM"},
  {cod:"500E2100003", label:"500E2100003 - ENCARGOS GERAIS – SEP"},
  {cod:"500E0600021", label:"500E0600021 - SESA"},
  {cod:"500E0500019", label:"500E0500019 - FES"},
  {cod:"500E0600022", label:"500E0600022 - SESP"},
  {cod:"500E0500043", label:"500E0500043 - FESP"},
  {cod:"500E0600017", label:"500E0600017 - SESPORT"},
  {cod:"500E0600016", label:"500E0600016 - SETUR"},
  {cod:"500E0500013", label:"500E0500013 - FUNTUR"},
  {cod:"500T1500001", label:"500T1500001 - TCEES"},
  {cod:"500E0600009", label:"500E0600009 - VICE"},
  {cod:"500E1900008", label:"500E1900008 - CAPAAC"},
  {cod:"500E1900003", label:"500E1900003 - CREFES"},
  {cod:"500E1900010", label:"500E1900010 - HDRC"},
  {cod:"500E1900002", label:"500E1900002 - HDS"},
  {cod:"500E1900004", label:"500E1900004 - HABF"},
  {cod:"500E1900015", label:"500E1900015 - HAB"},
  {cod:"500E1900001", label:"500E1900001 - HINSG"},
  {cod:"500E1900011", label:"500E1900011 - UIJM"},
  {cod:"500E2000004", label:"500E2000004 - SRSV"},
  {cod:"500E2000003", label:"500E2000003 - SRSC"},
  {cod:"500E2000001", label:"500E2000001 - SRSCI"},
  {cod:"500E1900006", label:"500E1900006 - HMSA"},
  {cod:"500E0600003", label:"500E0600003 - CASA CIVIL"},
  {cod:"500E0100026", label:"500E0100026 - ADERES1"},
  {cod:"500E0100010", label:"500E0100010 - ADERES2"},
  {cod:"500E1900013", label:"500E1900013 - HJSN"},
  {cod:"500E0600024", label:"500E0600024 - SETADES"},
  {cod:"500E0500029", label:"500E0500029 - FEAS"},
  {cod:"500E0500031", label:"500E0500031 - FUNCOP"},
  {cod:"500E0500044", label:"500E0500044 - FET/ES"},
  {cod:"500E0100025", label:"500E0100025 - IASES"},
  {cod:"500E1900009", label:"500E1900009 - CPF"},
  {cod:"500E1900007", label:"500E1900007 - HRAS"},
  {cod:"500E1900012", label:"500E1900012 - HSJC"},
  {cod:"500E2000002", label:"500E2000002 - SRSSM"},
  {cod:"500E0500014", label:"500E0500014 - PRO-ESPORTE"},
  {cod:"500D1400001", label:"500D1400001 - DEFENSORIA PUBLICA"},
  {cod:"500D0500001", label:"500D0500001 - FADEPES"},
  {cod:"500L1100001", label:"500L1100001 - ALES"},
  {cod:"500E0500022", label:"500E0500022 - FSPMES"},
]

export default codigosCidades
