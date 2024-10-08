import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class PeopleListComponent extends Component{
    @action
    showPerson(person){
      alert(`the person's name is ${person}!`);
    }
}