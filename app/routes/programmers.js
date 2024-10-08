import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model(){
       return ['Alan Turing','Bill Gates','Steve Jobs'];
    }
}
