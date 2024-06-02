'use client'

import { L10n, loadCldr, registerLicense } from '@syncfusion/ej2-base'
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
  'fr-BE': {
    schedule: {
      day: 'Jour',
      week: 'Semaine',
      workWeek: 'Semaine de travail',
      month: 'Mois',
      agenda: 'Agenda',
      today: "Aujourd'hui",
      noEvents: 'Aucun événement',
      emptyContainer: "Aucun événement n'est prévu pour ce jour.",
      allDay: 'Toute la journée',
      start: 'Début',
      end: 'Fin',
      more: 'Plus',
      close: 'Fermer',
      cancel: 'Annuler',
      noTitle: 'Sans titre',
      delete: 'Supprimer',
      deleteEvent: 'Supprimer un événement',
      deleteMultipleEvents: 'Supprimer plusieurs événements',
      selectedItems: 'Éléments sélectionnés',
      deleteSeries: 'Supprimer la série',
      edit: 'Éditer',
      editSeries: 'Éditer la série',
      editEvent: "Modifier l'événement",
      createEvent: 'Créer',
      subject: 'Sujet',
      addTitle: 'Ajouter un titre',
      moreDetails: 'Plus de détails',
      save: 'Sauvegarder',
      editContent:
        'Voulez-vous modifier seulement cet événement ou toute la série?',
      deleteContent:
        'Voulez-vous supprimer seulement cet événement ou toute la série?',
      deleteRecurrenceContent:
        'Voulez-vous supprimer seulement cet événement ou toute la série récurrente?',
      deleteFollowingEvent: 'Tous les événements suivants',
      deleteFollowingSeries: 'Tous les événements de la série suivante',
      editFollowingEvent: 'Tous les événements suivants',
      editFollowingSeries: 'Tous les événements de la série suivante',
      editRecurrence: "Modifier l'événement récurrent",
      recurrence: 'Récurrence',
      recurrenceRule: 'Règle de récurrence',
      'end-on': 'Fin',
      'end-by': 'Fin par',
      occurrences: 'Occurrences',
      series: 'Série',
      after: 'Après',
      on: 'Sur',
      every: 'Chaque',
      days: 'Jour(s)',
      weeks: 'Semaine(s)',
      months: 'Mois',
      years: 'Année(s)',
      first: 'Premier',
      second: 'Deuxième',
      third: 'Troisième',
      fourth: 'Quatrième',
      last: 'Dernier',
      summary: 'Résumé',
      daily: 'Quotidien',
      weekly: 'Hebdomadaire',
      monthly: 'Mensuel',
      yearly: 'Annuel',

      until: "Jusqu'à",
      count: 'Nombre de fois',
    },
  },
})

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
