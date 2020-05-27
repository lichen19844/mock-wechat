<template>
	<!-- <text class="free-badge bg-danger text-white rounded-circle font-sm position-absolute"
		style="right:15rpx; top:15rpx"
	><slot></slot></text> -->
	<text class="free-badge bg-danger text-white rounded-circle font-sm" :class="badgeClass" :style="badgeStyle"
	>{{badgeNum}}</text>
</template>

<script>
	export default {
		props: {
			badgeClass: {
				type: String,
				default: ''
			},
			badgeStyle: {
				type: String,
				default: ''
			},
			badgeNum: {
				type: [Number,String],
				default: ''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.free-badge {
		padding-left: 14rpx;
		padding-right: 14rpx;
		padding-bottom: 6rpx;
		padding-top: 6rpx;
	}
</style>
