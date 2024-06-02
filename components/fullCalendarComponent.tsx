'use client'

import { Ajax, L10n, loadCldr, registerLicense } from '@syncfusion/ej2-base'
import {
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
} from '@syncfusion/ej2-react-schedule'
import '../src/App.css'

import * as gregorian from './culture-files/ca-gregorian.json'
import * as numberingSystems from './culture-files/numberingSystems.json'
import * as numbers from './culture-files/numbers.json'
import * as timeZoneNames from './culture-files/timeZoneNames.json'

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames)
L10n.load({
  "fr": {
    "schedule": {
      "day": "Jour",
      "week": "Semaine",
      "workWeek": "Semaine de travail",
      "month": "Mois",
      "agenda": "Agenda",
      "weekAgenda": "Agenda de la semaine",
      "workWeekAgenda": "Agenda de la semaine de travail",
      "monthAgenda": "Agenda du mois",
      "today": "Aujourd'hui",
      "noEvents": "Pas d'événements",
      "emptyContainer": "Aucun événement prévu ce jour.",
      "allDay": "Toute la journée",
      "start": "Début",
      "end": "Fin",
      "more": "plus",
      "close": "Fermer",
      "cancel": "Annuler",
      "noTitle": "(Sans titre)",
      "delete": "Supprimer",
      "deleteEvent": "Supprimer l'événement",
      "deleteMultipleEvent": "Supprimer les événements multiples",
      "selectedItems": "Éléments sélectionnés",
      "deleteSeries": "Supprimer la série",
      "edit": "Éditer",
      "editSeries": "Éditer la série",
      "editEvent": "Éditer l'événement",
      "createEvent": "Créer",
      "subject": "Sujet",
      "addTitle": "Ajouter un titre",
      "moreDetails": "Plus de détails",
      "save": "Enregistrer",
      "editContent": "Voulez-vous modifier uniquement cet événement ou toute la série?",
      "deleteRecurrenceContent": "Voulez-vous supprimer uniquement cet événement ou toute la série?",
      "deleteContent": "Voulez-vous vraiment supprimer cet événement?",
      "deleteMultipleContent": "Voulez-vous vraiment supprimer les événements sélectionnés?",
      "newEvent": "Nouvel événement",
      "title": "Titre",
      "location": "Emplacement",
      "description": "Description",
      "timezone": "Fuseau horaire",
      "startTimezone": "Fuseau horaire de début",
      "endTimezone": "Fuseau horaire de fin",
      "repeat": "Répéter",
      "saveButton": "Enregistrer",
      "cancelButton": "Annuler",
      "deleteButton": "Supprimer",
      "recurrence": "Répétition",
      "wrongPattern": "Le motif de répétition n'est pas valide.",
      "seriesChangeAlert": "Les modifications apportées à des instances spécifiques de cette série seront annulées et ces événements correspondront à nouveau à la série.",
      "createError": "La durée de l'événement doit être plus courte que sa fréquence. Réduisez la durée ou modifiez le motif de récurrence dans l'éditeur d'événements récurrents.",
      "recurrenceDateValidation": "Certains mois ont moins de jours que la date sélectionnée. Pour ces mois, l'occurrence se produira le dernier jour du mois.",
      "sameDayAlert": "Deux occurrences du même événement ne peuvent pas se produire le même jour.",
      "editRecurrence": "Modifier la récurrence",
      "repeats": "Répète",
      "alert": "Alerte",
      "startEndError": "La date de fin sélectionnée survient avant la date de début.",
      "invalidDateError": "La date saisie n'est pas valide.",
      "ok": "OK",
      "occurrence": "Occurrence",
      "series": "Série",
      "previous": "Précédent",
      "next": "Suivant",
      "timelineDay": "Jour de la chronologie",
      "timelineWeek": "Semaine de la chronologie",
      "timelineWorkWeek": "Semaine de travail de la chronologie",
      "timelineMonth": "Mois de la chronologie",
      "expandAllDaySection": "Développer",
      "collapseAllDaySection": "Réduire"
    },
    "recurrenceeditor": {
      "none": "Aucun",
      "daily": "Quotidien",
      "weekly": "Hebdomadaire",
      "monthly": "Mensuel",
      "month": "Mois",
      "yearly": "Annuel",
      "never": "Jamais",
      "until": "Jusqu'à",
      "count": "Compter",
      "first": "Premier",
      "second": "Deuxième",
      "third": "Troisième",
      "fourth": "Quatrième",
      "last": "Dernier",
      "repeat": "Répéter",
      "repeatEvery": "Répéter tous les",
      "on": "Le",
      "end": "Fin",
      "onDay": "Jour",
      "days": "Jours",
      "weeks": "Semaines",
      "months": "Mois",
      "years": "Années",
      "every": "tous les",
      "summaryTimes": "fois",
      "summaryOn": "le",
      "summaryUntil": "jusqu'à",
      "summaryRepeat": "Répéter",
      "summaryDay": "jour(s)",
      "summaryWeek": "semaine(s)",
      "summaryMonth": "mois",
      "summaryYear": "année(s)"
    }
  }
});

type fullCalendarProps = {
  carId: string
}

const FullCalendarComponent = ({ carId }: fullCalendarProps) => {
  const licenseKey =
    'ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5WdE1iXXtac3NQT2lV'
  if (licenseKey) {
    console.log('license key set')
    registerLicense(licenseKey)
  } else {
    console.error('Syncfusion license key not found')
  }
  // I think this link can help you to set french language
  //https://ej2.syncfusion.com/react/documentation/schedule/localization?_gl=1*cx4tdz*_ga*NDkxMzQxNDYzLjE3MTcyMzc2NzU.*_ga_41J4HFMX1J*MTcxNzI5NTQzNC40LjEuMTcxNzI5Njg4Ni4wLjAuMA..#globalization
  const eventSettings = {
    dataSource: {
      StartTime: new Date(24, 5, 10),
      EndTime: new Date(2024, 5, 20),
      Subject: 'Audi a1',
      Id: '11255',
    },
  }

  return (
    <ScheduleComponent
      width="100%"
      height="550px"
      selectedDate={new Date(2024, 5, 15)}
      locale='fr'
      eventSettings={eventSettings}
    >
      <ViewsDirective>
        <ViewDirective option="Month" />
      </ViewsDirective>
      <Inject services={[Month]} />
    </ScheduleComponent>
  )
}

export default FullCalendarComponent
