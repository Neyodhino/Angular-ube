import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { CrudService } from '../../service/crudService/crud.service';
import { IProject } from 'src/app/models/project';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  projects: Array<IProject>;
  filteredProject: Array<IProject>;

  searchIcon = faSearch;
  _searchTerm: string;

  get searchTerm () {
    return this._searchTerm;
  }
  set searchTerm (value: string) {
    this._searchTerm = value;
    this.filteredProject = this.searchTerm ? this.performFilter(this.searchTerm) : this.projects;
    this.crud.emittedProjects.next(this.filteredProject);
  }
  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.getProjects().subscribe((data: Array<IProject>) => {
      this.projects = data;
    });
  }

  performFilter (filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) => project.projectName.toLocaleLowerCase().indexOf(filterBy) !== -1 || project
      .location.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}

