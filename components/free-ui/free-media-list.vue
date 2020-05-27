<template>
  <view hover-class="bg-hover-light">
    <div class="flex flex-row align-stretch" hover-class="bg-hover-light" @click="onClick" @longpress="long">
      <view class="flex flex-row align-center justify-center position-relative" style="width:145rpx;">
        <!-- <image :src="item.avator" mode="widthFix" class="rounded" style="width:92rpx; height:92rpx"></image> -->
        <free-avator :src="item.avator" :size="92"></free-avator>
        <!-- <text class="bg-danger text-white rounded-circle font-sm position-absolute"
          style="display:inline-block; padding-left:14rpx; padding-right:14rpx; padding-bottom:6rpx; padding-top:6rpx; right:15rpx; top:7rpx"
        >1</text> -->
        <!-- <free-badge badge-class="position-absolute" badge-style="display:inline-block; right:15rpx; top:7rpx">11</free-badge> -->
        <free-badge badge-class="position-absolute" badge-style="right:15rpx; top:15rpx" :badge-num="item.noreadnum" v-if="item.noreadnum"></free-badge>
      </view>
      <view class="flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary">
        <view class="flex flex-row align-center justify-between mb-1">
          <text class="font-md">{{ item.nickname }}</text>
          <text class="font-sm text-light-muted">{{ item.update_time | formatTime }}</text>
        </view>
        <text class="font text-ellipsis text-light-muted">{{ item.data }}</text>
      </view>
    </div>
	</view>
</template>

<script>
	import freeBase from '@/common/mixin/free-base.js';
	import freeAvator from '@/components/free-ui/free-avator.vue';
	import freeBadge from '@/components/free-ui/free-badge.vue';
	export default {
		mixins: [freeBase],
		props: {
			item: Object,
			index: Number
		},
		components: {
			freeAvator,
			freeBadge
		},
		methods: {
			onClick (e) {
				this.$emit('click')
				console.log('点击事件', e)
			},
			long (e) {
				console.log('长按事件', e)
			}
		}
	}
</script>

<style>
</style>

