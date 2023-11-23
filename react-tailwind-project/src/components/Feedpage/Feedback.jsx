import React from 'react'
import './Feeds'
import './Feed.css' 

const Feedback = () => {
  return (
    <div>

	<div class="wrapper">
		<h3>Lorem ipsum dolor sit amet.</h3>
		<form action="#">
			<div class="rating">
				<input type="number" name="rating" hidden/>
				<i class='bx bx-star star' style="--i: 0;"></i>
				<i class='bx bx-star star' style="--i: 1;"></i>
				<i class='bx bx-star star' style="--i: 2;"></i>
				<i class='bx bx-star star' style="--i: 3;"></i>
				<i class='bx bx-star star' style="--i: 4;"></i>
			</div>
			<textarea name="opinion" cols="30" rows="5" placeholder="Your opinion..."></textarea>
			<div class="btn-group">
				<button type="submit" class="btn submit">Submit</button>
				<button class="btn cancel">Cancel</button>
			</div>
		</form>
	</div>
    </div>
  )
}

export default Feedback
