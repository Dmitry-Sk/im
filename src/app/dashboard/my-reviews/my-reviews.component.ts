import { Component, OnInit } from '@angular/core';

import { Review } from '../../domain/entities/reviews/review';
import { GetEntitiesPagedQueryBase } from '../../domain/queries/get-entities-paged-base.query';
import { PaginatedResponseViewModel } from './../../domain/view-models/paginated-response-view-model';
import { ReviewService } from './../../review/shared/review.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit {
  pagedQueryOptions: GetEntitiesPagedQueryBase = new GetEntitiesPagedQueryBase();

  reviewsPagedResponse: PaginatedResponseViewModel<Review> = null;

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.loadReviews();
  }

  async loadReviews() {
    let response = await this.reviewService.getList(this.pagedQueryOptions);

    if (!this.reviewsPagedResponse) this.reviewsPagedResponse = response;
    else
      this.reviewsPagedResponse.Items = this.reviewsPagedResponse.Items.concat(
        response.Items
      );
  }

  loadMoreReviews() {
    this.pagedQueryOptions.CurrentPage++;
    this.loadReviews();
  }
}
