import { Component } from '@angular/core';
import {AppService} from "../../service/app.service";
import * as d3 from "d3";
import {RatingPerLocation} from "../../model/RatingPerLocation";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  topRated: RatingPerLocation[] = [];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.getRatings().subscribe(data => {
      this.topRated = data;
      this.topRated.sort((a:RatingPerLocation, b:RatingPerLocation) => b.rating - a.rating);
      this.topRated = this.topRated.slice(0,10);
      this.createSvg();
      this.drawBars(this.topRated);
    });

  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .attr("color", "blue")
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: RatingPerLocation[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map((d:RatingPerLocation) => d.location))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 5])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: RatingPerLocation) => x(d.location))
      .attr("y", (d: RatingPerLocation) => y(d.rating))
      .attr("width", x.bandwidth())
      .attr("height", (d: RatingPerLocation) => this.height - y(d.rating))
      .attr("fill", "#d04a35");
  }
}
